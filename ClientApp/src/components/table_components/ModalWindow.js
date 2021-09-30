import React, { Component } from "react";

export class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      show: false,
    };

    this.showModal = this.showModal.bind(this);
    this.hideModal = this.showModal.bind(this);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({
      show: false,
    });
  };

  render() {
    return (
      <main>
        <h1>Modal Window</h1>
      </main>
    );
  }
}
