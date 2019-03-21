import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './components/header';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleChangeLoader() {
    this.setState({ loader: false });
  }

  render() {
    let { route } = this.props;
    return (
      <div>
        <Header />
        <div>
          {renderRoutes(route.routes)}
        </div>
      </div>);
  }
}

export default { component: App };
