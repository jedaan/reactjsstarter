import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPublicData, logIn, logOut } from '../../data/actions/index';

class PublicPage extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  /**
   * component did mount
   */
  componentDidMount() {
    this.props.handleFetchPublicData();
  }

  render() {
    return (
      <div>
        public
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
    handleFetchPublicData: bindActionCreators(fetchPublicData, dispatch),
    handleLogOut: bindActionCreators(logOut, dispatch),
    handleLogIn: bindActionCreators(logIn, dispatch)
  });
}


export default {
  //loadData: ({ dispatch }) => dispatch(fetchPublicData()),
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(PublicPage))
};
