import React from 'react';
import logo from './logo.svg';
import './App.css';
import OtherPage from './otherPage'
import Fib from './fib'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to React</h2>
          <Link to='/'>Home</Link>
          <Link to='/OtherPage'>Other Page</Link>
        </header>
        <div>
          <Route exact path='/' component={Fib} />
          <Route path='/OtherPage' component={OtherPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
