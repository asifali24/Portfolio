import React, { Component } from "react";
import "../App.css";
import first from "../img/1.png";
import second from "../img/2.png";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-12" style={{ margin: 0, padding: 0 }}>
              <nav className="navbar navbar-expand-sm bg-primary navbar-dark">
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Contacts
                    </a>
                  </li>
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      GitHub
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="col-sm-12 row" style={{ margin: 0, padding: 0 }}>
              <div
                class="col-xl-6 Hello "
                style={{
                  paddingLeft: "15%",
                  // paddingRight: "25%",
                  paddingTop: "10%"
                }}
              >
                <div className="InnerDetails">
                  <div
                    style={{
                      fontSize: "35px",
                      fontWeight: "600"
                    }}
                  >
                    Hello
                  </div>
                  <div
                    style={{
                      fontSize: "65px",
                      fontWeight: "bolder"
                    }}
                  >
                    I am Asif Ali
                  </div>
                  <div
                    style={{
                      fontSize: "35px",
                      fontWeight: "600"
                    }}
                  >
                    Software Engineer
                  </div>
                  <div className="row" style={{ paddingLeft: "16px" }}>
                    <button
                      type="button"
                      className="btn btn-primary FirstButton"
                    >
                      Hire Me
                    </button>
                    <div style={{ width: "40px" }}></div>
                    <button
                      type="button"
                      className="btn btn-primary FirstButton"
                    >
                      Get CV
                    </button>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 Hello">
                <img src={first} />
              </div>
            </div>
            <div className="col-xl-12 row">
              <div className="col-xl-6 row">
                <img src={second} width="100%" />
              </div>
              <div className="col-xl-6 row">dfvbcvcvxcx</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
