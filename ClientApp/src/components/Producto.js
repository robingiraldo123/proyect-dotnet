import React, { Component } from 'react';

export class Producto extends Component {
    static displayName = Producto.name;
    constructor(props) {
        super(props);
        this.state = { productos: [], loading: true };
      }

    componentDidMount() {
        this.populateProductData();
      }

    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Producto.renderProduct(this.state.productos);

        return (
            <div>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    static renderProduct(productos){
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
          {productos.map(producto =>
              <tr key={producto.id}>
              <td>{producto.id}</td>   
              <td>{producto.name}</td>
              <td>{producto.email}</td>
              <td>{producto.phone_number}</td>
              <td> Detalles </td>
            </tr>
          )}
        </tbody>
        </table>);
    }

    async populateProductData() {
        const response = await fetch('api/dbproductos');
        const data = await response.json();
        this.setState({ productos: data, loading: false });
      }
}