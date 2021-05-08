import React from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/login";
import Content from "./pages/content";
import App from "./App";
import ComOne from "./pages/com1/index.js";
import ComTwo from "./pages/com2/index.js";

class ComRouter extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to="/App"></Redirect>}
          ></Route>
          <Route path="/app" component={App}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/comone" component={ComOne}></Route>
          <Route path="/comtwo" component={ComTwo}></Route>
          <Route path="/content" component={Content}></Route>
        </Switch>
      </HashRouter>
    );
  }
}
export default ComRouter;
