import React, { Component } from "react";
import { FacturaRow } from "./FacturaRow";
import { NewInvoiceForm } from "./NewInvoiceForm";

export class Factura extends Component {
    constructor(props){
        super(props)

        this.state = {
          facturas: [],
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
        Factura.renderInvoice(this.state.facturas, this)
      );
  
      return (
        <div>
          <p>This component demonstrates fetching data from the server.</p>
          {contents}
        </div>
      );
    }

    static renderInvoice(facturas, root) {
        return (
          <div className="table-responsive">
            <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
              <tr>
                <th>ID</th>
                <th>Folio</th>
                <th>Id de cliente</th>
                <th>Id de producto</th>
                <th>Fecha</th>
                <th>IVA</th>
                <th>Email</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              <NewInvoiceForm root={root} />
              {facturas.map(el => (
                <FacturaRow factura={el} key={el.id}/>
              ))}
              
            </tbody>
          </table>
          </div>
        )
    }

    async populateClientData() {
      const response = await fetch("api/dbfacturas");
      const data = await response.json();
      this.setState({ facturas: data, loading: false });
    }
}