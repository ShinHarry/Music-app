//Layouts
import { HeaderOnly } from '../components/Layout';

//Pages
import Home from '../pages/Home';
import Rank from '../pages/Rank';
import Library from '../pages/Library';
import Upload from '../pages/Upload';
import Search from '../pages/Search';
// public routes
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/rank', component: Rank },
    { path: '/library', component: Library },
    {path: '/upload', component: Upload, layout: HeaderOnly  },
    { path: '/search', component: Search, layout: null  },
];

// private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };