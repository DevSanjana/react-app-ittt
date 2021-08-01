import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./components/Pages/Home";
import CourseLibrary from "./components/Pages/Courses";
import Pricing from "./components/Pages/Pricing";
import Login from "./components/Pages/Login";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/Course-Library">
          <CourseLibrary />
        </Route>
        <Route path="/Pricing">
          <Pricing />
        </Route>
        <Route path="/Login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
