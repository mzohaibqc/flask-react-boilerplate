import React, {Component} from 'react'
import {Link} from 'react-router'

class Navbar extends Component {
  render() {
    return (
      <header className="navbar-fixed">
        <nav className="teal lighten-1">
          <div className="container">
            <div className="nav-wrapper">
              <a href="#" id="logo-container" className="brand-logo">{this.props.title}</a>

              <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li>
                  <Link to="/">About</Link>
                </li>
                <li>
                  <Link to="/contacts">Contatcs</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;