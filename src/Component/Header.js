// import React, { Component } from "react";
// import Image2 from "../img/Sig2.svg";
// import { Nav, NavItem, Navbar, NavDropdown, MenuItem } from "react-bootstrap";

// export default class Header extends Component {
//   render() {
//     return (
//       <div style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}>
//         <Navbar inverse collapseOnSelect>
//           <Navbar.Header>
//             <Navbar.Brand>
//               <a href="#brand">React-Bootstrap</a>
//             </Navbar.Brand>
//             <Navbar.Toggle />
//           </Navbar.Header>
//           <Navbar.Collapse>
//             <Nav>
//               <NavItem eventKey={1} href="#">
//                 Link
//               </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link
//               </NavItem>
//               <NavDropdown
//                 eventKey={3}
//                 title="Dropdown"
//                 id="basic-nav-dropdown"
//               >
//                 <MenuItem eventKey={3.1}>Action</MenuItem>
//                 <MenuItem eventKey={3.2}>Another action</MenuItem>
//                 <MenuItem eventKey={3.3}>Something else here</MenuItem>
//                 <MenuItem divider />
//                 <MenuItem eventKey={3.3}>Separated link</MenuItem>
//               </NavDropdown>
//             </Nav>
//             <Nav pullRight>
//               <NavItem eventKey={1} href="#">
//                 Link Right
//               </NavItem>
//               <NavItem eventKey={2} href="#">
//                 Link Right
//               </NavItem>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         ;
//       </div>
//     );
//   }
// }

import React, { Component } from "react";
import Image2 from "../img/Sig2.svg";

export default class Header extends Component {
  render() {
    return (
      <div style={{ position: "-webkit-sticky", position: "sticky", top: 0 }}>
        <nav className="navbar navbar-expand-md bg-dark navbar-dark">
          <a
            className="navbar-brand"
            href="#"
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
            style={{ marginLeft: "46%" }}
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
                <a className="nav-link" href="#">
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
                <a className="nav-link" href="#">
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
                <a className="nav-link" href="#">
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
