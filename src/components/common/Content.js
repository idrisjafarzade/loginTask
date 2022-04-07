import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from '../Detail';
import Blogs from '../Blogs';
function Content() {
  return (
        <Router>
      <Switch>
      <Route exact path="/">
        <Blogs />
       </Route>
        <Route exact path="/detail/:id" >
          <Detail/>
        </Route>
      </Switch>
    </Router> 
  )
}

export default Content