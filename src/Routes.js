import App from './index/App'
import HomePage from './index/pages/homePage'
import PrivatePage from './index/pages/privatePage';
import PublicPage from './index/pages/publicpage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      },
      {
        ...PrivatePage,
        path: '/privatepage',
      },
      {
        ...PublicPage,
        path: '/publicpage'
      },
    ]
  }
]
