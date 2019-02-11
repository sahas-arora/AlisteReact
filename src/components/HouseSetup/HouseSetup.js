import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import _ from "lodash";

import { setupHouse } from "../../actions";
import houseSetupFields from "./houseSetupFields";
import HouseSetupFormFields from "./HouseSetupFormFields";

class HouseSetup extends Component {
  constructor(props) {
    super(props);

    let rooms = [];
    let masters = [];
    this.state = { houseName: "", rooms: rooms, masters: masters, creator: "" };

    this.onSubmit = this.onSubmit.bind(this);
    this.renderFields = this.renderFields.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    console.log("The state object is: 1) House name: ", this.state.houseName);
    console.log("The room names: ", this.state.rooms);
    this.props.setupHouse(
      this.state.houseName,
      this.state.rooms,
      this.state.masters,
      this.state.creator
    );
    this.setState({ houseName: "", rooms: [], masters: [], creator: "" });
  }

  renderFields() {
    return (
      <div>
        <label>House Name</label>
        <input
          placeholder="Enter the name of the house"
          type="text"
          onChange={event => this.setState({ houseName: event.target.value })}
          value={this.state.houseName}
        />
        <br />
        <br />
        <label>Rooms</label>
        <input
          placeholder="Enter the names of the rooms seperated by a comma"
          type="text"
          onChange={event => {
            // let rooms = [];
            this.setState({ rooms: event.target.value });
          }}
          value={this.state.rooms}
        />
        <br />
        <br />
        <label>Masters</label>
        <input
          placeholder="Enter your email address"
          type="text"
          onChange={event => {
            // let masters = [];
            this.setState({ masters: event.target.value });
          }}
          value={this.state.masters}
        />
        <br />
        <br />
      </div>
    );
  }

  render() {
    return (
      <form className="ui form" onSubmit={this.onSubmit}>
        <div>{this.renderFields()}</div>
        <button type="submit">Submit</button>
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
