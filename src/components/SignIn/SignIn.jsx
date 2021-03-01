import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    this.props.signIn(this.state);

    this.setState({
      email: '',
      password: ''
    });
  };

  render() {
    const { email, password } = this.state;
    const { authError, auth } = this.props;

    if (auth.uid) {
      return <Redirect to="/" />
    }

    return (
      <div className="container">
        <form action="#" className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">
            Sign in
          </h5>
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
              Log in
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
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
}

function mapDispatchToProps(dispatch) {
  return {
    signIn: (credentials) => dispatch(signIn(credentials))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);