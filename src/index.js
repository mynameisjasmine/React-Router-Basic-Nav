import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './index.css';
import App from './App';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
<Router>
  <App />
  <Route exact path="/" component={Home}></Route>
  <Route  path="/about"  exact component={About}></Route>
  <Route  path="/contact"  exact component={Contact}></Route>
</Router>, document.getElementById('root'));
