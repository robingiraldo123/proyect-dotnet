import React, { Component } from "react";

class EditClientForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: props.id,
      name: props.name,
      email: props.email,
      phone: props.phone_number,
      detalles: props.description,
    };

    this.props = props;
  }

  handleSaveAction = (e) => {
    const { updateid, name, email, phone, desc } = this.props;
    const body = {
      name: name,
      email: email,
      phone_number: phone,
      description: desc,
    };

    console.log("click", body);

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    fetch("/api/dbclientes/" + updateid, requestOptions)
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
        <td>
          <span>{this.state.id}</span>
        </td>
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
          <button>Actualizar</button>
          <button onClick={this.props.makeRowStatic}>Cancelar</button>
        </td>
      </tr>
    );
  }
}

export default EditClientForm;
