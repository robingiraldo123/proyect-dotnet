import React, { Component } from "react";

export class NewProductForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      price: "",
      description: "",
      stock: "",
    };

    this.root = props.root;
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }


  onChangePrice = (e) => {
    this.setState({
      price: e.target.value,
    });
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeStock = (e) => {
    this.setState({
      stock: e.target.value,
    });
  }

  handleSaveAction = (e) => {
    const body = this.state;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/dbproductos", requestOptions)
      .then((res) => res.json())
      .then((result) => {

        /**Esta parte actualiza el estado en la tabla clientes */
        this.root.state.productos.push(result);
        this.root.setState({
          productos: this.root.state.productos,
        });

      });
  };


  render() {
    return (
        <tr>
          <td>id</td>
          <td>
            <input
              value={this.state.name}
              onChange={this.onChangeName}
              type="text"
              placeholder="nombre"
            />
          </td>
          <td>
            <input
              value={this.state.price}
              onChange={this.onChangePrice}
              type="text"
              placeholder="precio"
            />
          </td>
          <td>
            <input
              value={this.state.description}
              onChange={this.onChangeDescription}
              type="text"
              placeholder="descripción"
            />
          </td>
          <td>
            <input
              value={this.state.stock}
              onChange={this.onChangeStock}
              type="text"
              placeholder="disponibles"
            />
          </td>
          <td>
            <button onClick={this.handleSaveAction}>Guardar</button>
          </td>
        </tr>
    );
  }
}
