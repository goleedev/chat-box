const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const router = require('./router');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');

app.use(cors());
app.use(router);

io.on('connect', (socket) => {
    socket.on('join', ({ userName, room }, callback) => {
      const { error, user } = addUser({ id: socket.id, userName, room });
  
      if(error) return callback(error);
  
      socket.join(user.room);
  
      socket.emit('message', { user: 'admin', text: `Hey, ${user.userName}! Welcome to ${user.room} channel.`});
      socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.userName} has joined!` });
  
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });
  
      callback();
    });
  
    socket.on('sendMessage', (message, callback) => {
      const user = getUser(socket.id);
  
      io.to(user.room).emit('message', { user: user.userName, text: message });
  
      callback();
    });
  
    socket.on('disconnect', () => {
      const user = removeUser(socket.id);
  
      if(user) {
        io.to(user.room).emit('message', { user: 'Admin', text: `${user.userName} has left the channel.` });
        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
      }
    })
});

const PORT = 5000 || process.env.PORT;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));