import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from '../SignedInLinks/SignedInLinks';
import { SignedOutLinks } from '../SignedOutLinks/SignedOutLinks';
import { connect } from 'react-redux';

const Navbar = ({ auth, profile }) => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">Hello World</Link>
        {auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />}
      </div>
    </nav>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
}

export default connect(mapStateToProps)(Navbar);