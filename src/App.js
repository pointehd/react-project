import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';


function App() {
  return (
    <div>
      <Route exact="/" component={ Home }/>
      <Route path="/Auth" component={Auth} />
      
    </div>
  );
}

export default App;
