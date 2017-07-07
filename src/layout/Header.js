import React from "react";
import NavLink from './NavLink';

export default class Header extends React.Component {

  render() {
    return (
      <header class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
          <nav class="navbar-left">
            <ul role="nav" class="nav navbar-nav">
              <NavLink to="/home" className="site" >Home</NavLink>
            </ul>
          </nav>

        </div>
      </header>
    )
  }
}
