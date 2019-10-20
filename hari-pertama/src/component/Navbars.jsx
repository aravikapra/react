import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbars extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li className="titik-hitam">
              <Link to="/" className="link-navbar">
                home
              </Link>
            </li>
            <li className="titik-hitam">
              <Link to="/about" className="link-navbar">
                about
              </Link>
            </li>
            <li className="titik-hitam">
              <Link to="/contact" className="warna-ijo">
                contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
