import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import {Header} from "./components/Header";
import HomePage from "./components/HomePage";
import CalendarPage from "./components/CalendarPage";
import DonationPage from "./components/DonationPage";

function App() {

  function Routes() {
    return (
        <div>
          <HashRouter basename={process.env.PUBLIC_URL}>
            <Header />
            <Switch>
              <Route exact path={"/"} component={HomePage} />
              <Route path={"/calendar"} component={CalendarPage} />
              <Route path={"/donate"} component={DonationPage}/>
            </Switch>
            {/*<Footer />*/}
          </HashRouter>
        </div>
    );
  }
  return (
    <Routes/>
  );
}

export default App;
