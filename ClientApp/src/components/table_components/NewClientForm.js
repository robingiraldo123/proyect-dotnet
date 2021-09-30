import React, { Component } from "react";

class NewClientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      phone: "",
      detalles: "",
    };
  }

  handleSaveAction = (e) => {
    const body = {
      name: this.state.name,
      email: this.state.email,
      phone_number: this.state.phone,
      description: this.state.detalles,
    };

    console.log("click", body);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/dbclientes", requestOptions)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.items,
        });
      });
  };

  onChangeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePhone = (e) => {
    this.setState({
      phone: e.target.value,
    });
  };

  onChangeDetail = (e) => {
    this.setState({
      detalles: e.target.value,
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
            value={this.state.email}
            onChange={this.onChangeEmail}
            type="text"
            placeholder="email"
          />
        </td>
        <td>
          <input
            value={this.state.phone}
            onChange={this.onChangePhone}
            type="number"
            placeholder="teléfono"
          />
        </td>
        <td>
          <textarea
            value={this.state.detalles}
            onChange={this.onChangeDetail}
            placeholder="detalles"
          />
        </td>
        <td>
          <button onClick={this.handleSaveAction}>Guardar</button>
        </td>
      </tr>
    );
  }
}

export default NewClientForm;
