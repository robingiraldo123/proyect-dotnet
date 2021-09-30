import React, { Component } from "react";

export class DeleteButton extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return <button onClick={this.handleDeleteAction}>Eliminar</button>;
  }

  handleDeleteAction = (e) => {
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    };

    fetch("/api/dbclientes/" + this.props.deleteid, requestOptions)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };
}
