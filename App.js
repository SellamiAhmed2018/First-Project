import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label for="email">Email address:</label>
          <input type="email" className="form-control" id="email" />
        </div>
        <div className="form-group">
          <label for="username">UserName :</label>
          <input type="text" className="form-control" id="user" />
        </div>

        <div className="form-group">
          <label for="pwd">Password:</label>
          <input type="password" className="form-control" id="pwd" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" className="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
