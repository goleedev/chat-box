import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Join from '../src/components/Join/Join';
import Chat from '../src/components/Chat/Chat';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Join} />
      <Route exact path="/chat" component={Chat} />
    </BrowserRouter>
  );
}

export default App;
