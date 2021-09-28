import React, {Component} from "react";
import {Link} from 'react-router-dom';

export default class Login extends Component{
    constructor(props){
        super(props);
        this.mostrarProps();
    }

    mostrarProps = () =>{
        console.log("Desde Login: ",this.props);
    }

    cambiarUsuario = () =>{
        const usuario  = {
            user : "Keny",
            email: "pol.jefferson@yahoo.es"
        }
        this.props.setUsuario(usuario);
    }

    render(){
        
        const { user, email} = this.props;

        return(
            <div>
                <h1>Formulario lógin</h1>
                <h2>Aquí creamos el formualario para el login</h2>
                <Link to="/">Home</Link>
                <h3>{user}</h3>
                <h3>{email}</h3>
                <button className="btn btn-primary" onClick={this.cambiarUsuario}>Cambiar Usuario</button>
            </div>
        )
    }
}