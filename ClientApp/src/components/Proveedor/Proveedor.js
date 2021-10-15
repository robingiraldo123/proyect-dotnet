import React, { Component } from 'react';
import { NewSupplierForm } from './NewSupplierForm';
import "./proveedor.css"
import { ProveedorRow } from './ProveedorRow';

export class Proveedor extends Component {
    constructor(props){
        super(props)

        this.state = {
          proveedores: [],
          loading: true
        }

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
        Proveedor.renderSupplier(this.state.proveedores, this)
      );
  
      return (
        <div>
          <p>This component demonstrates fetching data from the server.</p>
          {contents}
        </div>
      );
    }

    static renderSupplier(proveedores, root) {
        return (
            <div className="table-responsive">
                <table className="table table-striped" aria-labelledby="tabelLabel">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Ramo</th>
                            <th>Descripción</th>
                            <th>Frecuencia</th>
                            <th>Nombre del contacto</th>
                            <th>Teléfono</th>
                            <th>Email</th>
                            <th>Dirección</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <NewSupplierForm root={root} />
                        {proveedores.map((el) => (
                            <ProveedorRow proveedor={el} key={el.id}/>
                        ))}
                    </tbody>
                </table>
          </div>
        )
    }

    async populateClientData() {
      const response = await fetch("api/dbproveedores");
      const data = await response.json();
      this.setState({ proveedores: data, loading: false });
      console.log(data)
    }
}