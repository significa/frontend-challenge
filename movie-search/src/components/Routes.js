import React from "react"
import { Switch, Route } from "react-router-dom"

import { Flex } from "./Layout"
import NotFound from "./NotFound"

import MainPage from "../containers/MainPage"
import MoviePage from "../containers/MoviePage"

const Routes = () => (
  <Flex>
    <Switch>
      <Route exact path="/" render={() => <MainPage />} />
      <Route exact path="/movie/:id" component={MoviePage} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Flex>
)
export default Routes
