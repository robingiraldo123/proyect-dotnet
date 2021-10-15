import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Cliente } from "./components/Cliente";
import { Producto } from "./components/Producto/Producto";
import { Proveedor } from "./components/Proveedor/Proveedor"
import { Factura } from "./components/Factura/Factura"
import { Ayuda } from "./components/Ayuda";

import "./custom.css";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <Layout>
        <Route exact path="/" component={Home} />
        <Route path="/clientes" component={Cliente} />
        <Route path="/productos" component={Producto} />
        <Route path="/proveedores" component={Proveedor} />
        <Route path="/facturas" component={Factura} />
        <Route path="/ayuda" component={Ayuda} />
      </Layout>
    );
  }
}
