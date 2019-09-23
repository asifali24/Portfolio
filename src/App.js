import React from "react";
import "./App.css";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Home from "./page/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          {/* <Route component={Error} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
