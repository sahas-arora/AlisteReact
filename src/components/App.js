import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UserDetails from "./UserDetails";
import Landing from "./Landing";
import Header from "./Header";

import HouseSetup from "./HouseSetup/HouseSetup";

import DeviceFields from "./DeviceSetup/DeviceFields";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/UserDetails" component={UserDetails} />
          <Route exact path="/HouseSetup" component={HouseSetup} />
          <Route exact path="/DeviceSetup" component={DeviceFields} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
