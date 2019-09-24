import React, { Component } from "react";
import "../App.css";

export default class Footer extends Component {
  render() {
    return (
      <div
        style={{
          width: "600px",
          backgroundColor: "pink",
          marginLeft: "auto",
          marginRight: "auto",
          textAlign: "center"
        }}
      >
        <div style={{ textAlign: "center", fontSize: "45px" }}>Asif Ali</div>
        <div style={{ textAlign: "center", fontSize: "35px" }}>
          YOU CAN CONNECT WITH ME ON
        </div>
        <div>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
      </div>
    );
  }
}
