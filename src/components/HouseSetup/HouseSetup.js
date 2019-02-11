import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { setupHouse } from "../../actions";
import houseSetupFields from "./houseSetupFields";
import HouseSetupFormFields from "./HouseSetupFormFields";

let rooms = [];
let masters = [];

class HouseSetup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      houseName: "",
      rooms: [],
      masters: masters,
      creator: "",
      clicked: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.renderFields = this.renderFields.bind(this);
    this.addRoom = this.addRoom.bind(this);
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
    this.setState({
      houseName: "",
      rooms: rooms,
      masters: [],
      creator: "",
      clicked: false
    });
  }

  addRoom() {
    this.setState({ clicked: true });

    if (this.state.clicked) {
      return (
        <input
          type="text"
          onChange={event => {
            this.setState({ rooms: event.target.value });
          }}
          value={this.state.rooms}
        />
      );
    }
    console.log("state was changed");
    console.log("The rooms are: ", this.state.rooms);
    this.setState({ clicked: false });
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
          placeholder="Enter the names of the rooms"
          type="text"
          onChange={event => {
            // let rooms = [];

            this.setState({ rooms: event.target.value });
          }}
          value={this.state.rooms}
        />
        <button className="blue btn-flat white-text" onClick={this.addRoom}>
          Add more rooms
        </button>

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
        <Link className="red btn-flat left white-text" to="/UserDetails">
          <button>Back</button>
        </Link>
        <Link className="green btn-flat right white-text" to="/DeviceSetup">
          <button type="submit">Submit</button>
        </Link>
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
