import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class Login extends Component{
    render(){
        return(
            <div>
                <h1>Formulario lógin</h1>
                <h2>Aquí creamos el formualario para el login</h2>
                <Link to="/">Home</Link>
            </div>
        )
    }
}