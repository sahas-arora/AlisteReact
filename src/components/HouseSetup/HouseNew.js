import React, { Component } from "react";
import reduxForm from "redux-form";

import HouseSetup from "./HouseSetup";
// import ExistingHouse from "./ExistingHouse";

class HouseNew extends Component {
  constructor(props) {
    super(props);

    this.state = { showNewForm: false };
    this.renderContent = this.renderContent.bind(this);
  }

  renderContent() {
    return (
      <div>
        <HouseSetup
          onSurveySubmit={() => this.setState({ showNewForm: true })}
        />
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "houseSetup"
})(HouseNew);
