import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import UserDetails from "./UserDetails";
import Landing from "./Landing";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/UserDetails" component={UserDetails} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
