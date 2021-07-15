import React, { Component, Fragment } from "react";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home/Home";
import Favorite from "./containers/Favorite/Favorite";

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/favorite">
            <Favorite />
          </Route>
          <Footer />
        </Fragment>
      </Router>
    );
  }
}

export default App;
