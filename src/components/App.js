import React from 'react';
import Navbar from './Navbar';
import ShrugControl from './ShrugControl';
import SignIn from '/Signin';
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
          <div className='control'><ShrugControl /></div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
