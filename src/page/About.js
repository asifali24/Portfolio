import React, { Component } from 'react'
import "../App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default class About extends Component {
    render() {
        return (
            <div>
        <div className="container-fluid">
          <div className="row">
            <div
              className="col-xl-12"
              style={{
                margin: 0,
                padding: 0,
                position: "sticky",
                top: 0,
                height: "60px",
                zIndex: "1"
              }}
            >
              <Header />
            </div>
            <div className="col-sm-12 row" style={{ margin: 0, padding: 0 }}>
            <div className="box-wrap col-sm-12  col-xl-12 col-lg-10 col-md-12 col-12 row">

            </div>                
            </div>
            </div>
            </div>
            </div>
        )
    }
}
