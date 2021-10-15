import React, { Component } from 'react';
import { DeleteButton } from '../DeleteButton';

export class ProductoRow extends Component {
    constructor(props){
        super(props)

        this.props = props;

        this.state = {
            producto: props.producto,
            loading: false,
            modifyId: 0
        }
    }

    makeRowEditable = () => {
        this.setState({
            modifyId: this.props.producto.id
        })
    }

    makeRowStatic = () => {
        this.setState({
            modifyId: 0
        })
    }

    onChangeName = (e) => {

        let aux = this.state.producto;
        aux.name = e.target.value;
        this.setState({
            producto: aux
        })

    }

    onChangePrice = (e) => {

        let aux = this.state.producto;
        aux.price = e.target.value;
        this.setState({
            producto: aux
        })

    }

    onChangeDescription = (e) => {

        let aux = this.state.producto;
        aux.description = e.target.value;
        this.setState({
            producto: aux
        })

    }

    onChangeStock = (e) => {

        let aux = this.state.producto;
        aux.stock = e.target.value;
        this.setState({
            producto: aux
        })

    }

    handleUpdateAction = () => {
        this.setState({ loading: true });
        const { id, name, price, description, stock } = this.state.producto;
        const body = {
            name: name,
            price: price,
            description: description,
            stock: stock,
        };

        this.makeRowStatic();
        
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        fetch("/api/dbproductos/" + id, requestOptions);

        this.setState({ loading: false });
    }

    render(){
        let el = this.state.producto;
        return (
            <> 
                {this.state.modifyId === el.id ? (
                    
                    <tr>
                       <td>{el.id}</td>
                        <td><input type="text" onChange={this.onChangeName}        value={el.name}       ></input></td>
                        <td><input type="text" onChange={this.onChangePrice}       value={el.price}      ></input></td>
                        <td><input type="text" onChange={this.onChangeDescription} value={el.description}></input></td>
                        <td><input type="text" onChange={this.onChangeStock}       value={el.stock}      ></input></td>
                        <td>
                            <button onClick={this.handleUpdateAction} className="btn-primary">Actualizar</button>
                            <button onClick={this.makeRowStatic} className="btn-primary">Cancelar</button>
                        </td>
                    </tr>

                ) : (
                
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.price}</td>
                        <td>{el.description}</td>
                        <td>{el.stock}</td>
                        <td>
                            <button onClick={this.makeRowEditable}    className="btn-primary">Editar</button>
                            <DeleteButton deleteid={el.id} dbcontroller="dbproductos" />
                        </td>
                    </tr>
                )}
            </>
        )
    }
}