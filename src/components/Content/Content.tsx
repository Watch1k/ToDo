import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Main from '../Main'
import Search from '../Search'

const Content = () => (
  <Switch>
    <Route path='/search'>
      <Search />
    </Route>
    <Route path='/'>
      <Main />
    </Route>
  </Switch>
)

export default Content
