import React from "react";
import NavLink from "./NavLink";

export default class Header extends React.Component {

  render() {
    return (
      <header className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <nav className="navbar-left">
            <ul role="nav" className="nav navbar-nav">
              <NavLink to="/home" className="site" >Home</NavLink>
              <NavLink to="/about" className="site" >About</NavLink>
            </ul>
          </nav>

        </div>
      </header>
    );
  }
}
