import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, logOut } from '../../data/actions/index';

class HomePage extends Component {
  constructor(props) {
    super(props);
  }

  handleRegisterClick() {

  }

  render() {
    return (
      <div>
        Hello ...
        {
          (this.props.authenticated) ?
            <input type="button" value="logout" onClick={this.props.handleLogOut} />
            :
            <input type="button" value="login" onClick={this.props.handleLogIn} />
        }
      </div >
    );
  }
}

function mapStateToProps({ data }) {
  return {
    authenticated: data.authenticated
  };
}


function mapDispatchToProps(dispatch) {
  return ({
    handleLogOut: bindActionCreators(logOut, dispatch),
    handleLogIn: bindActionCreators(logIn, dispatch)
  });
}



export default {
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(HomePage))
};
