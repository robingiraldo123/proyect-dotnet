import React, { Component } from 'react';
import { DeleteButton } from '../DeleteButton';

export class FacturaRow extends Component {
    constructor(props){
        super(props)

        this.props = props;

        this.state = {
            factura: props.factura,
            modifyId: 0
        }
    }

    makeRowEditable = () => {
        this.setState({
            modifyId: this.props.factura.id
        })
    }

    makeRowStatic = () => {
        this.setState({
            modifyId: 0
        })
    }

    onChangeFolio = (e) => {
        let aux = this.state.factura;
        aux.n_factura = e.target.value;

        this.setState({
            factura: aux
        })
    }

    onChangeClient = (e) => {
        let aux = this.state.factura;
        aux.id_cliente = e.target.value;

        this.setState({
            factura: aux
        })
    }

    onChangeProduct = (e) => {
        let aux = this.state.factura;
        aux.id_producto = e.target.value;

        this.setState({
            factura: aux
        })
    }

    onChangeDate = (e) => {
        let aux = this.state.factura;
        aux.fecha = e.target.value;

        this.setState({
            factura: aux
        })
    }

    onChangeIva = (e) => {
        let aux = this.state.factura;
        aux.iva = e.target.value;

        this.setState({
            factura: aux
        })
    }

    onChangeEmail = (e) => {
        let aux = this.state.factura;
        aux.email = e.target.value;

        this.setState({
            factura: aux
        })
    }


    handleUpdateAction = () => {
        this.setState({ loading: true });
        const { id, n_factura, id_cliente, id_producto, fecha, iva, email } = this.state.factura;
        const body = {
            n_factura: n_factura,
            id_cliente: id_cliente,
            id_producto: id_producto,
            fecha: fecha,
            iva: iva,
            email: email
        };

        this.makeRowStatic();
        
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        fetch("/api/dbfacturas/" + id, requestOptions);

        this.setState({ loading: false });
    }


    render(){
        let el = this.state.factura;
        return (
            <> 
                {this.state.modifyId === el.id ? (
                    
                    <tr>
                        <td><input type="text" readOnly value={el.id}                                /></td>
                        <td><input type="text" onChange={this.onChangeFolio}   value={el.n_factura}  /></td>
                        <td><input type="text" onChange={this.onChangeClient}  value={el.id_cliente} /></td>
                        <td><input type="text" onChange={this.onChangeProduct} value={el.id_producto}/></td>
                        <td><input type="text" onChange={this.onChangeDate}    value={el.fecha}      /></td>
                        <td><input type="text" onChange={this.onChangeIva}     value={el.iva}        /></td>
                        <td><input type="text" onChange={this.onChangeEmail}   value={el.email}      /></td>
                        <td>
                            <button onClick={this.handleUpdateAction} className="btn-primary">Actualizar</button>
                            <button onClick={this.makeRowStatic} className="btn-primary">Cancelar</button>
                        </td>
                    </tr>

                ) : (
                
                    <tr>
                        <td>{el.id}</td>
                        <td>{el.n_factura}</td>
                        <td>{el.id_cliente}</td>
                        <td>{el.id_producto}</td>
                        <td>{el.fecha}</td>
                        <td>{el.iva}</td>
                        <td>{el.email}</td>
                        <td>
                            <button onClick={this.makeRowEditable}    className="btn-primary">Editar</button>
                            <DeleteButton deleteid={el.id} dbcontroller="dbfacturas" />
                        </td>
                    </tr>
                )}
            </>
        )
    }
}