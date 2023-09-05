import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/layout/Header/Header';
import {RiMenu5Line} from 'react-icons/ri'

function App() {
  return (
    <Router>
    <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
