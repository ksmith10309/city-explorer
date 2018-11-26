import React from 'react';
import './app.css';

import Header from "./header.js";
import Main from "./main.js";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;
