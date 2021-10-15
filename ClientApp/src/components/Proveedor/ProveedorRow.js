import React, { Component } from 'react';
import { DeleteButton } from '../DeleteButton';

export class ProveedorRow extends Component {
    constructor(props){
        super(props)

        this.props = props;
        this.state = {
            proveedor: props.proveedor,
            modifyId: 0
        }
    }

    makeRowEditable = () => {
        this.setState({
            modifyId: this.props.proveedor.id
        })
    }

    makeRowStatic = () => {
        this.setState({
            modifyId: 0
        })
    }

    onChangeName = (e) => {
        let aux = this.state.proveedor;
        aux.name = e.target.value;
        this.setState({
            proveedor: aux
        })
    }

    onChangeRamo = (e) => {
        let aux = this.state.proveedor;
        aux.ramo = e.target.value;
        this.setState({
            proveedor: aux
        })
    }

    onChangeDescription = (e) => {

        let aux = this.state.proveedor;
        aux.description = e.target.value;
        this.setState({
            producto: aux
        })

    }

    onChangeFrec = (e) => {
        let aux = this.state.proveedor;
        aux.frecuencia = e.target.value;
        this.setState({
            proveedor: aux
        })
    }

    onChangePersonContact = (e) => {
        let aux = this.state.proveedor;
        aux.persona_contacto = e.target.value;
        this.setState({
            proveedor: aux
        })
    }

    onChangePhoneNumber = (e) => {
        let aux = this.state.proveedor;
        aux.phone_number = e.target.value;
        this.setState({
            proveedor: aux
        })
    }

    onChangeEmail = (e) => {
        let aux = this.state.proveedor;
        aux.email = e.target.value;
        this.setState({
            proveedor: aux
        })
    }

    onChangeDireccion = (e) => {
        let aux = this.state.proveedor;
        aux.direccion = e.target.value;
        this.setState({
            proveedor: aux
        })
    }


    handleUpdateAction = () => {
        this.setState({ loading: true });
        const { id, name, ramo, description, frecuencia, persona_contacto, phone_number, email, direccion } = this.state.proveedor;
        const body = {
            name: name,
            ramo: ramo,
            description: description,
            frecuencia: frecuencia,
            persona_contacto: persona_contacto,
            phone_number: phone_number,
            email: email,
            direccion: direccion
        };

        this.makeRowStatic();
        
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        fetch("/api/dbproveedores/" + id, requestOptions);

        this.setState({ loading: false });
    }


    render() {
        let el = this.props.proveedor;
        return (
            <>
                {this.state.modifyId === el.id ? (

                    <tr>
                        <td><input type="text" readOnly value={el.id}                                           ></input></td>
                        <td><input type="text" onChange={this.onChangeName} value={el.name}                     ></input></td>
                        <td><input type="text" onChange={this.onChangeRamo} value={el.ramo}                     ></input></td>
                        <td><input type="text" onChange={this.onChangeDescription} value={el.description}       ></input></td>
                        <td><input type="text" onChange={this.onChangeFrec} value={el.frecuencia}               ></input></td>
                        <td><input type="text" onChange={this.onChangePersonContact} value={el.persona_contacto}></input></td>
                        <td><input type="text" onChange={this.onChangePhoneNumber} value={el.phone_number}      ></input></td>
                        <td><input type="text" onChange={this.onChangeEmail} value={el.email}                   ></input></td>
                        <td><input type="text" onChange={this.onChangeDireccion} value={el.direccion}           ></input></td>
                        <td>
                            <button onClick={this.handleUpdateAction} className="btn-primary">Actualizar</button>
                            <button onClick={this.makeRowStatic} className="btn-primary">Cancelar</button>
                        </td>
                    </tr>

                ) : (

                    <tr>
                        <td>{el.id}</td>
                        <td>{el.name}</td>
                        <td>{el.ramo}</td>
                        <td>{el.description}</td>
                        <td>{el.frecuencia}</td>
                        <td>{el.persona_contacto}</td>
                        <td>{el.phone_number}</td>
                        <td>{el.email}</td>
                        <td>{el.direccion}</td>
                        <td>
                            <button onClick={this.makeRowEditable}    className="btn-primary">Editar</button>
                            <DeleteButton deleteid={el.id} dbcontroller="dbproveedores" />
                        </td>
                    </tr>

                )}
            </>
        )
    }
}