import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Appointment from "./Components/Appointment/Appointment/Appointment";
import Login from "./Components/Login/Login/Login";
import { createContext, useState } from "react";
import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import AllPateints from "./Components/AllPateints/AllPateints/AllPateints";
import AddDoctor from "./Components/AddDoctor/AddDoctor/AddDoctor";
import PrivateRoute from "./Components/Login/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    isSignedIn: false,
    displayName: "",
    email: "",
    photoUrl: "",
  });
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path="/appointment">
            <Appointment />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/appointment">
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute exact path="/dashboard/allpateints">
            <AllPateints />
          </PrivateRoute>

          <PrivateRoute exact path="/addDoctor">
            <AddDoctor />
          </PrivateRoute>

          <Route exact path="/login">
            <Login />
          </Route>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
