import React, { Component } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Main } from "./components/Main";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Main />
      </div>
    );
  }
}

export default App;
