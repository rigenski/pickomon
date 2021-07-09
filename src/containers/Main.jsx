import React, { Component, Fragment } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";

class Main extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Footer />
      </Fragment>
    );
  }
}

export default Main;
