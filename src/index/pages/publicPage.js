import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPublicData } from '../../data/actions/index';

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

  }

  render() {
    return (
      <div>
        {this.props.data}
      </div>
    );
  }
}

function mapStateToProps({ data }) {
  debugger
  return {
    data: data.publicData
  };
}


function mapDispatchToProps(dispatch) {
  return ({
  });
}


export default {
  loadData: ({ dispatch }) => dispatch(fetchPublicData()),
  component: connect(mapStateToProps, mapDispatchToProps)(withRouter(PublicPage))
};
