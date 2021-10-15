import React, { Component } from "react";

export class NewInvoiceForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      n_factura: "",
      id_cliente: "",
      id_producto: "",
      fecha: "",
      email: "",
      iva: ""
    };

    this.root = props.root;
    this.updateTable = props.updateTable;
  }

  onChangeNfactura = (e) => {
    this.setState({
      n_factura: e.target.value,
    });
  }


  onChangeIdCliente = (e) => {
    this.setState({
      id_cliente: e.target.value,
    });
  }

  onChangeIdProducto = (e) => {
    this.setState({
      id_producto: e.target.value,
    });
  }

  onChangeDate = (e) => {
    this.setState({
      fecha: e.target.value,
    });
  }

  onChangeIVA = (e) => {
      this.setState({
          iva: e.target.value
      })
  }

  onChangeEmail = (e) => {
      this.setState({
          email: e.target.value
      })
  }


  handleSaveAction = (e) => {
    const body = this.state; 

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/dbfacturas", requestOptions)
      .then((res) => res.json())
      .then((result) => {

        /**Esta parte actualiza el estado en la tabla clientes */
        this.root.state.facturas.push(result);
        this.root.setState({
          facturas: this.root.state.facturas,
        });
      });
  };


  render() {
    return (
        <tr>
          <td>id</td>
          <td>
            <input
              value={this.state.n_factura}
              onChange={this.onChangeNfactura}
              type="text"
              placeholder="folio"
            />
          </td>
          <td>
            <input
              value={this.state.id_cliente}
              onChange={this.onChangeIdCliente}
              type="text"
              placeholder="id de cliente"
            />
          </td>
          <td>
            <input
              value={this.state.id_producto}
              onChange={this.onChangeIdProducto}
              type="text"
              placeholder="id de producto"
            />
          </td>
          <td>
            <input
              value={this.state.fecha}
              onChange={this.onChangeDate}
              type="text"
              placeholder="fecha"
            />
          </td>
          <td>
            <input
              value={this.state.iva}
              onChange={this.onChangeIVA}
              type="number"
              placeholder="iva"
            />
          </td>
          <td>
            <input
              value={this.state.email}
              onChange={this.onChangeEmail}
              type="text"
              placeholder="email"
            />
          </td>
          <td>
            <button onClick={this.handleSaveAction}>Guardar</button>
          </td>
        </tr>
    );
  }
}