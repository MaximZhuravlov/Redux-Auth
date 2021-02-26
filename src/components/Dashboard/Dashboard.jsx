import React from 'react';
import { connect } from 'react-redux';

const Dashboard = () => {
  return (
    <div>
      <h1>Hello word</h1>
    </div>
  );
};

function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(Dashboard);