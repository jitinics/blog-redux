import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import login from './login'
const routes = [...login]
class RouteIndex extends Component {
  render() {
    return routes.map((route,i) => {
      return (
        <Route
          path={route.path}
          key={i}
          exact
          render={props => (
            <route.component {...props} />
          )}
        />
      );
    })
    
 }
}
export default RouteIndex;