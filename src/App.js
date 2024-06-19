import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import SearchPage from './SearchPage';

function App() {
  return (
    <Router>
      <div className="container">
        <header className="header">
          <img src="logo.svg" alt="Logo" className="logo" />
          <nav className="nav">
            <a href="/rent">Alugar</a>
            <a href="/buy">Comprar</a>
            <a href="/advertise">Anunciar</a>
            <a href="/useful-links">Links úteis</a>
            <a href="/help">Ajuda</a>
            <button className="login-button">Entrar</button>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
