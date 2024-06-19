import React from 'react';
import './App.css';
import searchBackgroundImage from './couple-on-laptop.webp'; // Adjust the path as necessary

function SearchPage() {
  return (
    <main className="main">
      <img src={searchBackgroundImage} alt="Background" className="background-image" />
      <div className="search-section">
        <h1>Você busca quais tipos de imóveis?</h1>
        <p>Responda algumas perguntas e vamos mostrar imóveis que combinam com você</p>
        <div className="search-options">
          <button className="search-button">Apartamento</button>
          <button className="search-button">Casa</button>
          <button className="search-button">Casa de condomínio</button>
          <button className="search-button">Kitnet</button>
          <button className="search-button">Tanto faz</button>
        </div>
        <button className="continue-button">Continuar</button>
      </div>
    </main>
  );
}

export default SearchPage;
