import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './screens/Home';
import Profile from './screens/Profile';
import Signup from './screens/Signup'

import './styling/index.css';

const App = () =>
(
    <Router>
      <div>
         <Route exact path="/" component={Home} />
         <Route path="/profile" component={Profile} />
         <Route path="/signup" component={Signup} />
      </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));