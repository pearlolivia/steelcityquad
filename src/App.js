import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import {Header} from "./components/Header";
import {Footer} from "./components/Footer";
import HomePage from "./components/HomePage";
import CalendarPage from "./components/CalendarPage";

function App() {

  function Routes() {
    return (
        <div>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
              <Route exact path={"/"} component={HomePage} />
              <Route path={"/calendar"} component={CalendarPage} />
            </Switch>
            <Footer />
          </HashRouter>
        </div>
    );
  }
  return (
    <Routes/>
  );
}

export default App;
