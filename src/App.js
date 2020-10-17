import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AdminEvent from './components/Admin/AdminEvent';
import Dashboard from './components/Admin/Dashboard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RegistrationArea from './components/RegistrationArea/RegistrationArea';
import SelectedTask from './components/SelectedTask/SelectedTask';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
          <Route exact path="/">
           <Home></Home>
          </Route>
          <Route path="/login">
         <Login></Login>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/adminDashboard">
          <Dashboard></Dashboard>
          </Route>
          <Route path="/adminAddEvent">
          <AdminEvent></AdminEvent>
          </Route>
          <PrivateRoute path="/register/:id">
          <RegistrationArea></RegistrationArea>
          </PrivateRoute>
          <PrivateRoute path="/selectedTasks">
          <SelectedTask></SelectedTask>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
