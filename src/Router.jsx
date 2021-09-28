import React, {Component} from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Home from './components/Home/index';
import Login from './components/Login/index';

export default class Router extends Component{
    render(){
        return(
            <ReactRouter>
                <App>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/login" component={Login}></Route>
                    </Switch>
                </App>                
            </ReactRouter>
        )
    }
}
