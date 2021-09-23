import React, { Component } from 'react';

export class Cliente extends Component {
    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : Cliente.renderClient(this.state.cliente);

        return (
            <div>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
            </div>
        );
    }

    static renderClient(cliente){
        return <div>{cliente}</div>
    }

    async populateClientData() {
        const response = await fetch('api/dbcliente');
        const data = await response.json();
        this.setState({ cliente: data, loading: false });
      }
}