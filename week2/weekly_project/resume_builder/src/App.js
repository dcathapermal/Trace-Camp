import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Home from './components/Home'
import Template from './components/Template'
import Form from './components/Form'
import FinalPage from './components/FinalPage';

function App () {
    return (
      <div>
        <Router>
          <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to = "/" className = "nav-item nav-link">Home</NavLink>
            <NavLink to = "/Template" className = "nav-item nav-link">Template</NavLink>
            <NavLink to = "/Form" className = "nav-item nav-link">Form</NavLink>
          </nav>

          <Route path = "/" exact component = {Home}/>
          <Route path = "/Template" exact component = {Template}/>
          <Route path = "/Form" exact component = {Form}/>
          <Route path = "/FinalPage" exact component = {FinalPage}/>

          </Router>
      </div>
    );
  }

export default App;
