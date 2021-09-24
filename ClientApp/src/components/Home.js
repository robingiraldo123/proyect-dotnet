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
          <li><a href='/#'>Proveedores</a></li>
          <li><a href='/#'>Facturas</a></li>
          <li><a href='/ayuda'>Ayuda</a></li>
        </ul>
        <h2>Actividad reciente:</h2>
        <ul>
          <li><strong>Client-side navigation</strong>. For example, click <em>Counter</em> then <em>Back</em> to return here.</li>
          <li><strong>Development server integration</strong>. In development mode, the development server from <code>create-react-app</code> runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.</li>
          <li><strong>Efficient production builds</strong>. In production mode, development-time features are disabled, and your <code>dotnet publish</code> configuration produces minified, efficiently bundled JavaScript files.</li>
        </ul>
        <p>The <code>ClientApp</code> subdirectory is a standard React application based on the <code>create-react-app</code> template. If you open a command prompt in that directory, you can run <code>npm</code> commands such as <code>npm test</code> or <code>npm install</code>.</p>
      </div>
    );
  }
}
