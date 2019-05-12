import React, { Component } from 'react';
import { connect } from 'react-redux';
import Route from './routes/index'
import { BrowserRouter as Router } from "react-router-dom";
const mapStateToProps = state => ({
  ...state
})
class App extends Component {
 render() {
  return (
    <Router>
      <Route/>
    </Router>
  )
 }
}
export default connect(mapStateToProps, null)(App)


