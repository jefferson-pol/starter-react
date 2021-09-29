import React, { Component } from "react";

export default class Facturas extends Component{
  constructor(props){
    super(props);
    this.getFacturas();
  }
  getFacturas = () => {
    this.props.getFacturas();
  }

  mostrarFacturas = () => {
    const facturas = this.props.facturas;
    return facturas.map((factura,index)=>{
      return(
        <tr key={index}>
          <td>{factura.id}</td>
          <td>{factura.nombre}</td>
          <td>{factura.fecha}</td>
          <td>{factura.nit}</td>
          <td>{factura.direccion}</td>
        </tr>
      )
    })
  }

  render(){
    return(
      <div>
        <h1>Facturas</h1>
        <h2>Listado de facturas</h2>
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>NIT</th>
              <th>Direccion</th>
            </tr>
          </thead>
          <tbody>
            {this.mostrarFacturas()}
          </tbody>
        </table>
      </div>
    )
  }
}
