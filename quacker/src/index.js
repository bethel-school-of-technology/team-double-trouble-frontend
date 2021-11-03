import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './screens/Home';
import Profile from './screens/Profile';
import SignUp from './screens/SignUp'

import './styling/index.css';

const App = () =>
(
    <Router>
      <div>
         <Route exact path="/" component={SignUp} />
         <Route path="/home" component={Home} />
         <Route path="/profile" component={Profile} />
         <Route path="/signup" component={SignUp} />
      </div>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));