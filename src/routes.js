import Home from './components/Home';
import Tribu from './components/Tribu';
import Oo from './components/Oo';

export default [
  {
    path: '/tribu',
    component: Tribu,
  },
  {
    path: '/tribu/:name',
    component: Oo,
  },
  {
    path: '/',
    component: Home,
  },
];
