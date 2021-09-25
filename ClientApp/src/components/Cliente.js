import React, { Component } from 'react';
import Form from './Form'

export class Cliente extends Component {
    static displayName = Cliente.name;
    constructor(props) {
        super(props);
        this.state = { clientes: [], loading: true };
      }

    componentDidMount() {
        this.populateClientData();
      }

    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Cliente.renderClient(this.state.clientes);

        return (
            <div>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    static renderClient(clientes){
        return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Telefono</th>
              <th>Detalles</th>          
            </tr>
          </thead>
          <tbody>
            
            <Form />
          
            {clientes.map(cliente =>
              <tr key={cliente.id}>
                <td>{cliente.id}</td>   
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.phone_number}</td>
                <td> Detalles </td>
              </tr>
          )}
        </tbody>
        </table>);
    }

    async populateClientData() {
        const response = await fetch('api/dbclientes');
        const data = await response.json();
        this.setState({ clientes: data, loading: false });
      }
}