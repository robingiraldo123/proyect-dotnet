import React, { Component } from "react";
import EditClientForm from "./EditClientForm";
import ReactDOM from "react";

export class UpdateButton extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return <button onClick={this.props.makeRowEditable}>Editar</button>;
  }

  makeRowEditable = (id, row) => {
    console.log("Table row", row.current);
    const { updateid, name, email, phone, desc } = this.props;
  };

  handleUpdateAction = (e) => {
    const { updateid, name, email, phone, desc, row } = this.props;
    //console.log("updating", row.current);

    const body = {
      name: name,
      email: email,
      phone_number: phone,
      description: desc,
    };

    const requestOptions = {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };

    console.log("opts", requestOptions);

    this.makeRowEditable(updateid, row);

    /*fetch("/api/dbclientes/" + updateid, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });*/
  };
}
