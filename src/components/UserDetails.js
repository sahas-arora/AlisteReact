import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">
              Submit
            </button>
          </span>
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
