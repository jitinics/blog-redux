import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { simpleAction } from '../../actions/simpleAction';
import { withRouter } from 'react-router-dom'
const mapStateToProps = state => ({
  ...state
})
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ simpleAction }, dispatch)
}
class login extends Component {
  login = (event) => {
    this.props.simpleAction({email: this.state.email, password: this.state.password});
    console.log(this.state.email)
    console.log(this.state.password)
  }
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
    this.handleChange = this.handleChange.bind(this);
    this.simpleAction = this.login.bind(this);
  }
  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
  return (
   <div className="login">
    <div>
      <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
      <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
      <button onClick={this.login}>login</button><br/>
      {JSON.stringify(this.props.userState)}
    </div>
   </div>
  );
 }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(login));