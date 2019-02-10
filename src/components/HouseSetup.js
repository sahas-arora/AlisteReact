import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { setupHouse } from "../actions";

class HouseSetup extends Component {
  constructor(props) {
    super(props);

    this.state = { houseName: "", rooms: [], masters: [], creator: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.renderFields = this.renderFields.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    this.setupHose;
    this.setState({ houseName: "", rooms: [], masters: [], creator: "" });
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
        <div>{this.renderFields}</div>
      </form>
    );
  }
}

let mapDispatchToProps = dispactch => {
  return bindActionCreators({ setupHouse }, dispactch);
};

export default connect(
  null,
  mapDispatchToProps
)(HouseSetup);
