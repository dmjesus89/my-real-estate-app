import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import backgroundImage from './couple-on-laptop.webp'; // Adjust the path as necessary

function HomePage() {
  const [activeTab, setActiveTab] = useState('rent');
  const navigate = useNavigate();

  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };

  const handleSearchClick = (e) => {
    e.preventDefault();
    navigate('/search');
  };

  return (
    <main className="main">
      <img src={backgroundImage} alt="Background" className="background-image" />
      <div className="search-section">
        <h1>Encontre um lar para chamar de seu</h1>
        <div className="search-options">
          <button
            className={`search-button ${activeTab === 'rent' ? 'active' : ''}`}
            onClick={() => handleButtonClick('rent')}
          >
            Alugar
          </button>
          <button
            className={`search-button ${activeTab === 'buy' ? 'active' : ''}`}
            onClick={() => handleButtonClick('buy')}
          >
            Comprar
          </button>
        </div>
        <form className="search-form" onSubmit={handleSearchClick}>
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Valor total até" />
          <input type="text" placeholder="Nº de quartos" />
          <button type="submit">Buscar imóveis</button>
        </form>
      </div>
    </main>
  );
}

export default HomePage;
