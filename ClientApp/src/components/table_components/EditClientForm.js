import React, { Component } from "react";

class EditClientForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.id,
            name: props.name,
            email: props.email,
            phone_number: props.phone_number,
            description: props.description,
            loading: false,
        };

        this.props = props;
    }

    handleSaveAction = () => {
        this.setState({ loading: true });
        const { id, name, email, phone_number, description } = this.state;
        const body = {
            name: name,
            email: email,
            phone_number: phone_number,
            description: description,
        };

        this.props.makeRowStatic();
        this.waitData(id, body);
        this.props.updateTable(this.state, this.props.root);
    };

    waitData(id, body) {
        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
        };

        fetch("/api/dbclientes/" + id, requestOptions);

        this.setState({ loading: false });
    }

    onChangeName = (e) => {
        this.setState({
            name: e.target.value,
        });
    };

    onChangeEmail = (e) => {
        this.setState({
            email: e.target.value,
        });
    };

    onChangePhone = (e) => {
        this.setState({
            phone: e.target.value,
        });
    };

    onChangeDetail = (e) => {
        this.setState({
            description: e.target.value,
        });
    };

    render() {
        return this.state.loading === false ? (
            <tr>
                <td>
                    <span>{this.state.id}</span>
                </td>
                <td>
                    <input
                        value={this.state.name}
                        onChange={this.onChangeName}
                        type="text"
                        placeholder="nombre"
                    />
                </td>
                <td>
                    <input
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        type="text"
                        placeholder="email"
                    />
                </td>
                <td>
                    <input
                        value={this.state.phone_number}
                        onChange={this.onChangePhone}
                        type="text"
                        placeholder="tel??fono"
                    />
                </td>
                <td>
                    <textarea
                        value={this.state.description}
                        onChange={this.onChangeDetail}
                        placeholder="detalles"
                    />
                </td>
                <td>
                    <button onClick={this.handleSaveAction} className="btn-primary">
                        Actualizar
                    </button>
                    <button onClick={this.props.makeRowStatic} className="btn-primary">
                        Cancelar
                    </button>
                </td>
            </tr>
        ) : (
            <tr>
                <td>Actualizando...</td>
            </tr>
        );
    }
}

export default EditClientForm;
