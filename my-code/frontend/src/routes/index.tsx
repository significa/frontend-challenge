import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../pages/Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/m/:id" component={() => <div>Book details</div>} />
    </Switch>
  );
};

export default Routes;
