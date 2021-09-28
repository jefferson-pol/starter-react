import React, {Component} from 'react';
import { withRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '@popperjs/core';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';


class App extends Component{
  render(){
    return (
      <div className="App">
         {this.props.children}
      </div>
    )
  }
}

export default withRouter(App);
