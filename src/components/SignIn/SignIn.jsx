import React, { Component } from 'react';

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
  };

  render() {
    const { email, password } = this.state;

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
        </form>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-0">
            Log in
          </button>
        </div>
      </div>
    );
  }
}

export default SignIn;