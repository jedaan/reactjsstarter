import React, { Component } from 'react';
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component {

    componentWillMount() {
      if (this.props.authenticated === false) {
        this.props.history.push("/");
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push("/");
      }
    }

    render() {
      if (this.props.authenticated) {
        return <div>
          <ComposedComponent {...this.props} />
        </div>;
      }
      return null;
    }
  }

  function mapStateToProps({ data }) {
    return { authenticated: data.authenticated };
  }

  function mapDispatchToProps(dispatch) {
    return ({
    });
  }

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
}