import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import Header from "./Header"
import { Flex } from "./Layout"
import NotFound from "./NotFound"

import MainPage from "../containers/MainPage"
import MoviePage from "../containers/MoviePage"

const Routes = () => (
  <BrowserRouter>
    <Flex>
      <Route path="/" component={Header} />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/movie/:id" component={MoviePage} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Flex>
  </BrowserRouter>
)

export default Routes
