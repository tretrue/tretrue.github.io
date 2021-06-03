import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/HomePage/Home";
import Menu from "./components/Menu/Menu";
import Projects from "./pages/Projects/Projects";
import Resume from "./pages/Resume/Resume";

function App() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
