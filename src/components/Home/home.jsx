import React, { Component } from "react";
import  { Link } from "react-router-dom";

export default class Home extends Component{
    constructor(props){
        super(props);
        this.mostrarProps();
    }

    mostrarProps=()=>{
        console.log("Desde Home: ",this.props);
    }

    cambiarUsuario =()=>{
        const usuario = {
            user: "JEFF",
            email: "pol.jefferson@hotmail.com"
        }
        this.props.setUsuario(usuario);
        console.log(this.props);
    }

    render(){
        const { user, email } = this.props;
        return(
            <div>
                <h1>Bienvenidos a la pagina principal</h1>
                <Link to="/login">Login</Link>
                <h2>{user}</h2>
                <h2>{email}</h2>
                <button className="btn btn-success" onClick={()=>{this.cambiarUsuario()}}>Cambiar Usuario</button>
                <Link to="/facturas" className="btn btn-info ms-3">Ver Facturas</Link>
            </div>
        )
    }

}
