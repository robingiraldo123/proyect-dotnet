import React, { Component } from "react";

export class NewSupplierForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      ramo: "",
      description: "",
      frecuencia: "",
      email: "",
      persona_contacto: "",
      phone_number: "",
      direccion: ""
    }

    this.root = props.root;
    this.updateTable = props.updateTable;
  }

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }


  onChangeRamo = (e) => {
    this.setState({
      ramo: e.target.value,
    });
  }

  onChangeDescription = (e) => {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeFrec = (e) => {
    this.setState({
      frecuencia: e.target.value,
    });
  }

  onChangePersonContact = (e) => {
      this.setState({
          persona_contacto: e.target.value
      })
  }

  onChangePhone  = (e) => {
      this.setState({
          phone_number: e.target.value
      })
  }

  onChangeEmail = (e) => {
      this.setState({
          email: e.target.value
      })
  }

  onChangeAdress = (e) => {
      this.setState({
          direccion: e.target.value
      })
  }

  handleSaveAction = (e) => {
    const body = this.state;

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/dbproveedores", requestOptions)
      .then((res) => res.json())
      .then((result) => {

        /**Esta parte actualiza el estado en la tabla clientes */
        this.root.state.proveedores.push(result);
        this.root.setState({
          proveedores: this.root.state.proveedores,
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
              value={this.state.ramo}
              onChange={this.onChangeRamo}
              type="text"
              placeholder="ramo"
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
              value={this.state.frecuencia}
              onChange={this.onChangeFrec}
              type="text"
              placeholder="frecuencia"
            />
          </td>
          <td>
            <input
              value={this.state.persona_contacto}
              onChange={this.onChangePersonContact}
              type="text"
              placeholder="contacto"
            />
          </td>
          <td>
            <input
              value={this.state.phone_number}
              onChange={this.onChangePhone}
              type="text"
              placeholder="teléfono"
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
            <input
              value={this.state.direccion}
              onChange={this.onChangeAdress}
              type="text"
              placeholder="dirección"
            />
          </td>
          <td>
            <button onClick={this.handleSaveAction}>Guardar</button>
          </td>
        </tr>
    );
  }
}