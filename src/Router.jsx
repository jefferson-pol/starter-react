import React, {Component} from "react";
import {
  BrowserRouter as ReactRouter,
  Switch,
  Route
} from "react-router-dom";
import App from './App';
import Home from './components/home';
import Login from './components/login';

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
