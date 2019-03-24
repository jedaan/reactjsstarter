import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logIn, logOut } from '../../data/actions/index';

class AnotherPublicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  /**
   * component did mount
   */
  componentDidMount() {
    //this.props.handleLoadData();
  }

  render() {
    return (
      <div>
        another public...
        {this.props.data}
        {
          (this.props.authenticated) ?
            <input type="button" value="logout" onClick={this.props.handleLogOut} />
            :
            <input type="button" value="login" onClick={this.props.handleLogIn} />
        }
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  return {
    data: data.publicData,
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
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(AnotherPublicPage))
};
