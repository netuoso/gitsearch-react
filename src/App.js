import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import octocat from './octocat.svg';
import Header from './components/Header';

import Search from './pages/Search'
import About from './pages/About'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="App">
          <header className="App-header">
            <img src={octocat} className="App-logo" alt="logo" />
          </header>
          <Routes>
            <Route path="/" exact element={<Search/>} />
            <Route path="/about" exact element={<About/>} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
