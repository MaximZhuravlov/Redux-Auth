import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/actions/authActions';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.signUp(this.state);
  };

  render() {
    const { email, password, firstName, lastName } = this.state;
    const { auth, authError } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <form action="#" className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">
            Sign up
          </h5>
          <div className="input-field">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">
              Sign up
            </button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signUp: newUser => dispatch(signUp(newUser))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
