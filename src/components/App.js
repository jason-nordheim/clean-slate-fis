import React from 'react'
import {
  Switch,
  Route 
} from "react-router-dom";
import Login from './login'
import { Header } from './layout'

function App() {
  return (
    <Switch>
      <Header /> 
      <Route path="/" component={Login}/> 
    </Switch>
  );
}

export default App;
