import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./page/Home";
import Project from "./page/Project"
import About from "./page/About"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/project" component={Project} />
          <Route exact path="/aboutAsif" component={About} />
          <Route path='/external' component={() => { window.location = 'https://domain.extension/external-without-params'; return null;} }/>
          
          {/* <Route path='/external' component={() => { window.location = 'https://domain.extension/external-without-params'; return null;} }/> */}
          {/* <Route component={Error} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
