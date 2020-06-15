import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Projects from "./Projects/Projects";
import CreateNewProject from "./Projects/CreateNewProject/CreateNewProject";
import Dashboard from "./Dashboard/Dashboard";
import LoginDialog from "./Dialog/LoginDialog";

const routing = (
  <Router>
    <div>
      <Route path="/all-projects" exact component={Projects} />
      <Route path="/dashboard" exact component={App} />
      <Route path="/createNewProject" exact component={CreateNewProject} />
      <Route path="/" exact component={App} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));
