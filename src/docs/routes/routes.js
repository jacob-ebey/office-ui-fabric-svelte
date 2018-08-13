import Components from './Components.html';
import GetStarted from './GetStarted.html';
import Home from './Home.html';
import { componentRoutes } from './components/routes'

export const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: 'home',
    component: Home
  },
  {
    path: 'get-started',
    component: GetStarted
  },
  {
    path: 'components',
    component: Components
  },
  ...componentRoutes
];
