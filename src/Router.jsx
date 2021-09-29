import React, {Component} from "react";
import {
  Switch,
  Route
} from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import App from './App';
import {
    Home,
    Login,
    Facturas
} from './components';


export default class Router extends Component{
    render(){
        const { history } = this.props;
        return(
            <ConnectedRouter history={history}>
                    <App>
                        <Switch>
                            <Route exact path="/" component={Home}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/facturas" component={Facturas}></Route>
                        </Switch>
                    </App>
            </ConnectedRouter>
        )
    }
}
