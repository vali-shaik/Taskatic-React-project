import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Projects from "./Projects/Projects";
import CreateNewProject from "./Projects/CreateNewProject/CreateNewProject";
import Dashboard from "./Dashboard/Dashboard";

const routing = (
  <Router>
    <div>
      <Route path="/all-projects" exact component={Projects} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/createNewProject" exact component={CreateNewProject} />
      <Route path="/" exact component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
