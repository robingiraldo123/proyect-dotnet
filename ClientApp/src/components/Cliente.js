import React, { Component } from "react";
import NewClientForm from "./table_components/NewClientForm";
import TableRow from "./table_components/TableRow";

export class Cliente extends Component {
  static displayName = Cliente.name;
  constructor(props) {
    super(props);
    this.state = {
      clientes: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.populateClientData();
  }

  render() {
    let contents = this.state.loading ? (
      <p>
        <em>Loading...</em>
      </p>
    ) : (
      Cliente.renderClient(this.state.clientes, this)
    );

    return (
      <div>
        <p>Lista de clientes:</p>
        {contents}
      </div>
    );
  }

  static handleTableState = (data, root) => {
    let clientArray = root.state.clientes;

    clientArray.map((el) => {
      if (el.id === data.id) {
        el.name = data.name;
        el.email = data.email;
        el.phone_number = data.phone_number;
        el.description = data.description;
      }
    });

    root.setState({
      clientes: clientArray,
    });
  };

  static renderClient(clientes, self) {
    return (
      <table className="table table-striped" aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <NewClientForm />
          {clientes.map((cliente) => (
            <TableRow
              key={cliente.id}
              updateTable={this.handleTableState}
              root={self}
              {...cliente}
            />
          ))}
        </tbody>
      </table>
    );
  }

  async populateClientData() {
    const response = await fetch("api/dbclientes");
    const data = await response.json();
    this.setState({ clientes: data, loading: false });
  }
}
