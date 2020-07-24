import React from 'react';
import Navbar from './NavBar';
import Control from './Control';
import SignIn from './SignIn';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='navbar'><Navbar /></div>
      <Switch>
        <Route path='/signin'>
          <SignIn />
        </Route>
        <Route path='/'>
          <div className='control'><Control /></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
