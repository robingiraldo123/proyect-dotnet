import React, { Component } from "react";
import { Route } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./components/Home";
import { Cliente } from "./components/Cliente";
import { Producto } from "./components/Producto";
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
        <Route path="/ayuda" component={Ayuda} />
      </Layout>
    );
  }
}
