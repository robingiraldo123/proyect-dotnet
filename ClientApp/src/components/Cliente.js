import React, { Component } from 'react';
import Form from './Form'

export class Cliente extends Component {
    static displayName = Cliente.name;
    constructor(props) {
        super(props);
<<<<<<< HEAD
        this.state = {
            clientes: [],
            loading: true
=======
        this.state = { 
          clientes: [],
          loading: true,
          currentDeletingId: ''
>>>>>>> 233a8439bb10a26156ee11265d0a567019658b60
        };
      }

    componentDidMount() {
      this.populateClientData();
    }

    handleDeleteAction = (e) => {
      const body = {
        "id": e.target.id
      };

      const requestOptions = {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' }
      };

      fetch('/api/dbclientes/' + e.target.id, requestOptions)
      .then(response=>{
         return response.json()
      }).then(data=> {
    
        console.log(data)
      });
      
    }

    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Cliente.renderClient(this.state.clientes,this);

        return (
            <div>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    static renderClient(clientes,self){

        return (
        <table className='table table-striped' aria-labelledby="tabelLabel">
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
            <Form />
            {clientes.map(cliente =>
              <tr key={cliente.id}>
                <td>{cliente.id}</td>   
                <td>{cliente.name}</td>
                <td>{cliente.email}</td>
                <td>{cliente.phone_number}</td>
                <td>{cliente.description}</td>
                <td><button id={cliente.id} onClick={self.handleDeleteAction}>Eliminar</button></td>
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