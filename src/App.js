import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import RegistrationArea from './components/RegistrationArea/RegistrationArea';

function App() {
  return (
    
    <Router>
      <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/login">
         <Login></Login>
          </Route>
          <Route path="/register/:id">
          <RegistrationArea></RegistrationArea>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
