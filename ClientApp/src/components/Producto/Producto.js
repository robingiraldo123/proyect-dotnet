import React, { Component } from "react";
import {NewProductForm} from "./NewProductForm";
import { ProductoRow } from "./ProductoRow";

export class Producto extends Component {
    static displayName = Producto.name;
    constructor(props) {
        super(props);

        this.state = { 
            productos: [],
            loading: true
        };

    }

    componentDidMount() {
        this.populateProductData();
    }


    static makeRowEditable = () =>{
        console.log("editable")
    }


    static handleDeleteAction = () => {
        console.log("deleting")
    }


    render() {
        let contents = this.state.loading ? (
            <p>
                <em>Loading...</em>
            </p>
        ) : (
            Producto.renderProduct(this.state.productos, this)
        );
  
        return (
            <div>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    static renderProduct(productos, root) {
        return (
            <table className="table table-striped" aria-labelledby="tabelLabel">
            <thead>
                <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Descripción</th>
                <th>Disponibles</th>
                <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                <NewProductForm root={root} />
                {productos.map((el) => (

                    <ProductoRow key={el.id} producto={el} root={root} />
                 
                ))}
            </tbody>
            </table>
        );
    }

  async populateProductData() {
    const response = await fetch("api/dbproductos");
    const data = await response.json();
    this.setState({ productos: data, loading: false });
  }
}
