import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import requireAuth from '../components/hocs/requireAuth';

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

  }


  render() {
    return (
      <div>
        {this.props.privateData}
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
  });
}


export default {
  component: connect(mapStateToProps, mapDispatchToProps)(requireAuth(withRouter(PrivatePage)))
};
