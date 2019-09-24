import React, { Component } from "react";
import "../App.css";
import first from "../img/1.png";
import second from "../img/2.png";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default class Home extends Component {
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
              <div
                class="col-xl-6 Hello "
                style={{
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
              <div className="col-xl-6 row" style={{ textAlign: "left" }}>
                <div
                  style={{
                    fontSize: "35px",
                    fontWeight: "bold",
                    marginTop: "100px",
                    marginLeft: "50px",
                    // backgroundColor: "red",
                    height: "170px",
                    width: "500px"
                  }}
                >
                  <div>LET'S</div>
                  <div>INTRODUCE ABOUT</div>
                  <div>MYSELF</div>
                </div>
                <div
                  style={{
                    marginLeft: "50px",
                    width: "500px",
                    fontSize: "30px",
                    textAlign: "left",
                    height: "400px"
                  }}
                >
                  dfghjkjiuytresfcghh resdtghijok;liuyftgc oiuytresdfguiu
                  srdyuyiuuytdxcf dfghjkjiuytresfcghh resdtghijok;liuyftgc
                  oiuytresdfguiu srdyuyiuuytdxcf dfghjkjiuytresfcghh
                  resdtghijok;liuyftgc oiuytresdfguiu srdyuyiuuytdxcf
                  dfghjkjiuytresfcghh resdtghijok;liuyftgc oiuytresdfguiu
                  srdyuyiuuytdxcf
                </div>
              </div>
            </div>
            <div
              className="col-xl-12 row"
              // style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
