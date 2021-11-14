import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext(); 

function App() {
  const [loggedInUser, setLoggedInUser ] = useState({
    isSignedIn: false,
    displayName:'',
    email:'',
    photoUrl:''
  })
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/appointment">
          <Appointment/>
        </Route>

        <Route exact path="/dashboard/appointment">
          <Dashboard/>
        </Route>

        <Route exact path="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
