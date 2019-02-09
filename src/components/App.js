import React, { Component } from "react";

import UserDetails from "./UserDetails";

class App extends Component {
  render() {
    return (
      <div>
        Aliste Application
        <div className="container">
          <UserDetails />
        </div>
      </div>
    );
  }
}

export default App;
