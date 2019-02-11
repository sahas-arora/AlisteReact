import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Link } from "react-router-dom";

import loggedUser from "../actions";

class UserDetails extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", emailId: "" };
    this.onSubmit = this.onSubmit.bind(this);
    console.log("The props are: ", props);
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.loggedUser(this.state.name, this.state.emailId);
    console.log("name:", this.state.name);
    console.log("emailId:", this.state.emailId);
    this.setState({ name: "", emailId: "" });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name</label>
          <input
            style={{ marginBottom: "5px" }}
            type="text"
            onChange={event => {
              this.setState({ name: event.target.value });
            }}
            value={this.state.name}
          />
          <label>Email Id</label>
          <input
            style={{ marginBottom: "5px" }}
            onChange={event => {
              this.setState({ emailId: event.target.value });
            }}
            type="text"
            value={this.state.emailId}
          />
          <Link to="/" className="red btn-flat left white-text">
            Cancel
          </Link>
          <Link to="/HouseSetup" className="green btn-flat right white-text">
            Submit
          </Link>
        </form>
      </div>
    );
  }
}

// let mapStateToProps = state => {
//   return {
//     user: state.user
//   };
// };

let mapDispatchToProps = dispactch => {
  return bindActionCreators({ loggedUser }, dispactch);
};

export default connect(
  null,
  mapDispatchToProps
)(UserDetails);
