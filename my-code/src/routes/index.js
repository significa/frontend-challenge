import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Main from "../containers/Main"
import Detail from "../containers/Detail"
import NotFound from "../components/NotFound"
import TopBar from "../components/Topbar"

import { Flex } from "../components/Layout"

const Routes = () => (
  <BrowserRouter>
    <Flex>
      <Route path="/" component={TopBar} />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Flex>
  </BrowserRouter>
)

export default Routes
