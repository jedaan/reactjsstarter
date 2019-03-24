import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import requireAuth from '../components/hocs/requireAuth';
import { fetchPrivateData, logIn, logOut } from '../../data/actions/index';

class PrivatePage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }

  /**
   * component did mount
   */
  componentDidMount() {
    this.props.handleFetchPrivateData();
  }


  render() {
    return (
      <div>
        private
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
    data: data.privateData
  };
}


function mapDispatchToProps(dispatch) {
  return ({
    handleFetchPrivateData: bindActionCreators(fetchPrivateData, dispatch),
    handleLogIn: bindActionCreators(logIn, dispatch),
    handleLogOut: bindActionCreators(logOut, dispatch)
  });

}


export default {
  loadData: ({ dispatch }) => dispatch(fetchPrivateData()),
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(withRouter(PrivatePage)))
};
