import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <form>
        <div class="form-group">
          <label for="email">Email address:</label>
          <input type="email" class="form-control" id="email" />
        </div>
        <div class="form-group">
          <label for="username">UserName :</label>
          <input type="text" class="form-control" id="user" />
        </div>

        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" />
        </div>
        <div class="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <button type="submit" class="btn btn-default">
          Submit
        </button>
      </form>
    );
  }
}

export default App;
