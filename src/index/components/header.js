import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { logOut } from '../../data/actions/index';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: true
    };
    this.changeRoute = this.changeRoute.bind(this);
  }

  changeRoute(destination) {
    this.props.history.push(destination);
  }

  render() {
    let { authenticated } = this.props;
    return (
      <div >
        <Navbar expand="md">
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink onClick={() => this.changeRoute('/privatepage')}> private page </NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.changeRoute('/publicpage')} >public page</NavLink>
              </NavItem>
              <NavItem>
                <NavLink onClick={() => this.changeRoute('/anotherpublicpage')} >another public page</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>);
  }
}

function mapStateToProps({ data }) {
  return { authenticated: data.authenticated };
}


function mapDispatchToProps(dispatch) {
  return ({
    handleLogOut: bindActionCreators(logOut, dispatch),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
