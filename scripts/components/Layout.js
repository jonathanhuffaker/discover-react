import React from "react";
import { Link } from "react-router";

import Footer from "../components/Footer";
import Nav from "../components/layout/Nav";

export default class Layout extends React.Component {
  render() {
    const { history, location } = this.props;
    const containerStyle = {
      marginTop: "60px"
    };

    return (
      <div>

        <Nav {...{history, location}} />

        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">
              <h1>Discover React</h1>

              {this.props.children}

            </div>
          </div>
          <Footer/>
        </div>
      </div>

    );
  }
}