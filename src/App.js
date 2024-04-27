// App.js
import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopToBottmNav from './components/TopToBottmNav';

function App() {
  return (
    <Router>
      <div className="App">
        <TopToBottmNav/>
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/" element={<Portfolio />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
