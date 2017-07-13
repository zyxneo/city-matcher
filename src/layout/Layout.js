import "../../main.scss";

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PropTypes from "prop-types";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="layout">
        <Header/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.object
};
