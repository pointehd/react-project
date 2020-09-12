import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth } from 'pages';


function App() {
  return (
    <div>
      <Route exact path="/" component={ Home }/>
      <Route path="/Auth" component={Auth} />
      
    </div>
  );
}

export default App;
