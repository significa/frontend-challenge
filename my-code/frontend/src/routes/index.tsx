import React from "react";
import { Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={() => <div>Home</div>} />
      <Route exact path="/m/:id" component={() => <div>Book details</div>} />
    </Switch>
  );
};

export default Routes;
