import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Blog, Pages} from "./components/Blog";
import {BrowserRouter, Route, Link} from 'react-router-dom';


function App() {
    return (
      <div className="App">
        <Pages />
      </div>
    );
  }


export default App;
