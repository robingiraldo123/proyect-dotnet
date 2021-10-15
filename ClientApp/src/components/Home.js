import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Mi tienda</h1>
        <p>Bienvenido a tu tienda. Aquí puedes llevar el control de:</p>
        <ul>
          <li><a href='/clientes'>Clientes</a></li>
          <li><a href='/productos'>Productos</a></li>
          <li><a href='/proveedores'>Proveedores</a></li>
          <li><a href='/facturas'>Facturas</a></li>
          <li><a href='/ayuda'>Ayuda</a></li>
            </ul>

        <h2>Actividad reciente:</h2>
        
     
      </div>
    );
  }
}
