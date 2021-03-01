import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';

const Dashboard = ({ auth }) => {
  if (!auth.uid) {
    return <Redirect to="/signin" />
  }

  return (
    <div>
      <h1>Hello world</h1>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    auth: state.firebase.auth
  };
}

export default connect(mapStateToProps)(Dashboard);