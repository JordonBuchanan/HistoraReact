import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { PrivateRoute, AdminPrivateRoute } from './Components/Auth/PrivateRoute';
import 'materialize-css/dist/css/materialize.min.css';

import { history } from './Helpers';

import AltNav from './Components/layout/AltNav/AltNav';
import Footer from './Components/layout/Footer/Footer';
import Home from './Components/Pages/Home/Home';
import Podcast from './Components/Pages/Podcast/Podcast';
import Blog from './Components/Pages/Blog/Blog';
import Videos from './Components/Pages/Videos.js/Videos';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import BooksDashboard from './Components/Pages/Dashboard/BooksDashboard/BooksDashboard';
import PapersDashboard from './Components/Pages/Dashboard/PapersDashboard/PapersDashboard';
import SettingsDashboard from './Components/Pages/Dashboard/SettingsDashboard/SettingsDashboard';
import HistoraPicksDashboard from './Components/Pages/Dashboard/HistoraPicksDashboard/HistoraPicksDashboard';
import ForumDashboard from './Components/Pages/Dashboard/ForumDashboard/ForumDashboard';
import Register from './Components/Auth/Register';
import Login from './Components/Auth/Login';
import LoginAdmin from './Components/Auth/LoginAdmin';
import AdminDash from './Components/Pages/AdminDash/AdminDash';
import BlogWriter from './Components/Pages/AdminDash/BlogWriter/BlogWriter';
import DeveloperPortal from './Components/Pages/DeveloperPortal/DeveloperPortal';

class App extends React.Component {
  render(){
    return (
        <Router history={history}>
          <div>
            <Helmet>
              <title>Histora</title>
              <meta name="description" content="This is what you want to show as the page content in the Google SERP Listing" />
            </Helmet>
            <AltNav />
            <Route exact path="/" component={ Home } />
            <Route exact path="/podcast" component={ Podcast } />
            <Route exact path="/videos" component={ Videos } />
            <Route exact path="/blog" component={ Blog } />
            <Route exact path="/register" component={ Register } />
            <Route exact path="/login" component={ Login } />
            <Route exact path="/loginadmin" component={ LoginAdmin } />
            <Route exact path="/developerportal" component={ DeveloperPortal } />
            <PrivateRoute exact path="/dashboard" component={ Dashboard } />
            <PrivateRoute exact path="/dashboard/settings" component={ SettingsDashboard } />
            <PrivateRoute exact path="/dashboard/books" component={ BooksDashboard } />
            <PrivateRoute exact path="/dashboard/papers" component={ PapersDashboard } />
            <PrivateRoute exact path="/dashboard/historapicks" component={ HistoraPicksDashboard } />
            <PrivateRoute exact path="/dashboard/forum" component={ ForumDashboard } />
            <AdminPrivateRoute exact path="/admindash" component={ AdminDash } />
            <AdminPrivateRoute exact path="/blogwriter" component={ BlogWriter } />
            <Footer />
          </div>
        </Router>
    );
  }
}

export default App;
