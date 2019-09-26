import React, { Component } from 'react'
import "../App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";

export default class Project extends Component {
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
             
             <div className="box OneLine">
                 <div style={{fontSize:"35px",fontWeight:"700", color:"black"}}>Smart City</div>
                 <div style={{textAlign:"left",fontSize:"15px",marginTop:"50px" , color:"blue"}}>
                     <div>LANGUAGE OF IMPLEMENTATION : - java, Html, javaScript , bootstrap</div>
                     <div style={{marginTop:"10px"}}>
                     OPERATING SYSTEM : - Windows 8/8.1/10
                     </div>
                     <div style={{marginTop:"10px"}}>
                     ROLE : - Made the front end with the help of HTML, Javascript, , made the back-end with the help of
Servlet , jsp and connect the Mysql data bast in the project . 
                     </div>
                     <div style={{marginTop:"10px"}}> DESCRIPTION :- It is a website that allows the user to search the almost all the public usable things like Order food, ATM, Mall, Gym, etc, it allows vender and user to resister on web site, an admin will verify all
the details of the vendor that it is correct or not
                     </div>
                 </div>
             </div>
             <div className="box OneLine">
                 <div style={{fontSize:"35px",fontWeight:"700", color:"black"}}>Trello connect with salesforce</div>
                 <div style={{textAlign:"left",fontSize:"15px",marginTop:"50px" , color:"blue"}}>
                     <div>LANGUAGE OF IMPLEMENTATION :- Apex, VF Page, JSON.</div>
                     <div style={{marginTop:"10px"}}>
                     OPERATING SYSTEM : - Windows 8/8.1/10
                     </div>
                     <div style={{marginTop:"10px"}}>
                     ROLE :- - Made the front end with the help of VF Page , connect the Trello to Salesforce with the help of
REST API, use the oAuth 1.0 for authentication of front end with salesforce and Trello
                     </div>
                     <div style={{marginTop:"10px"}}> DESCRIPTION :- It is an website portel which the oAuth 1.0 for authentication of front end with salesforce and Trello
                     </div>

                 </div>
             </div>
             <div className="box OneLine">Coming Soon</div>
             <div className="box OneLine">Coming soon</div>
             <div
              className="col-xl-12 row"
              // style={{ marginLeft: "auto", marginRight: "auto" }}
            >
              <div style={{marginTop:"100px" , marginLeft:"auto",marginRight:"auto"}}>
              <Footer />
              </div>
              
            </div>
             
           
           
           
         </div>
                </div>
                </div>
                </div>
                </div>

        )
    }
}
