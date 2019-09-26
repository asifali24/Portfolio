import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a
            className="navbar-brand"
            href="/"
            style={{ marginLeft: "13%", fontSize: "26px", fontWeight: "900" }}
          >
            Asif Ali
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="collapsibleNavbar"
            style={{ marginLeft: "40%" }}
          >
            <ul className="navbar-nav">
              <li
                className="nav-item"
                style={{
                  width: "100px",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center"
                }}
              >
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li
                className="nav-item"
                style={{
                  width: "100px",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center"
                }}
              >
                <a className="nav-link" href="/project">
                  Project's
                </a>
              </li>
              <li
                className="nav-item"
                style={{
                  width: "100px",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center"
                }}
              >
                <a className="nav-link" href="https://github.com/asifali24">
                  github
                </a>
              </li>
              <li
                className="nav-item"
                style={{
                  width: "100px",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center"
                }}
              >
                <a className="nav-link" href="https://gitlab.com/asifali24">
                  gitlab
                </a>
              </li>
              <li
                className="nav-item"
                style={{
                  width: "100px",
                  fontSize: "20px",
                  fontWeight: "400",
                  textAlign: "center"
                }}
              >
                <a className="nav-link" href="/aboutAsif">
                  About
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
