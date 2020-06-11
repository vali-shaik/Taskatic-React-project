import React, { Component } from "react";
import "./App.css";
import Login from "./Login/Login";
import NewUser from "./Login/NewUser";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewUser />
        <Login />
      </div>
    );
  }
}

export default App;
