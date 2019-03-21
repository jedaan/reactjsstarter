import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collapse, Nav, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { logOut } from '../../data/actions/index';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    let authenticated = this.props;
    return (
      <div >
        <Navbar expand="md">
          <NavbarToggler onClick={this.toggle} className="toggle" />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {
                (authenticated) ? <NavItem>
                  <NavLink href="void(0)" onClick={this.props.handleLogOut}>logout</NavLink>
                </NavItem> :
                  <NavItem>
                    <NavLink href="/login">login</NavLink>
                  </NavItem>
              }
              <NavItem>
                <NavLink href="/privatepage">private page </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/publicpage">public page</NavLink>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);
