import React, { Component } from "react";

export class UpdateButton extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }

  render() {
    return <button onClick={this.props.makeRowEditable}>Editar</button>;
  }
}
