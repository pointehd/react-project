import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Auth, TodoList } from 'pages';


function App() {
  return (
    <div>
      <Route exact path="/" component={ Home }/>
      <Route path="/Auth" component={Auth} />
      <Route path="/TodoList" component={TodoList}/>
    </div>
  );
}

export default App;
