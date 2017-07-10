import React from "react";
import { Link } from "react-router";

import style from "./navLink.scss";

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  render() {
    return (
      <li>
        <Link {...this.props} className={`${style.nav__link}`}  activeClassName={`${style.is_active}`}>
          {this.props.children}
        </Link>
      </li>
    )
  }
})
