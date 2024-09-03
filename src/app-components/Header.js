import React from "react";
import logo from '../img/SL-logo.png';
import '../css/App.css';
import '../css/Header.css';

function Header() {

  function toggleMenu() {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("show");
  }

  // Funzione per connettere MetaMask
  async function connectWallet() {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
      } catch (error) {
        console.error('Error connecting MetaMask:', error);
      }
    } else {
      alert('MetaMask not detected');
    }
  }

  return (
    <div>
      <div className="header-div">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"></link>
        <header className="header">
          <div className="header-logo-name">
            <img src={logo} className="App-logo" alt="logo" />
          </div>

          {/* Barra di ricerca con icona */}
          <div className="header-search">
            <input type="text" placeholder="Search news or topics..." />
            <button className="search-button">
              <i className="fas fa-search"></i>
            </button>
          </div>

          {/* Icona MetaMask per il login */}
          <div className="header-metamask">
            <button onClick={connectWallet} className="metamask-button">
              <i className="fas fa-wallet"></i></button>
          </div>

          <div className="header-hamburger-menu">
            <div className="hamburger" onClick={toggleMenu}>☰</div>
            <nav className="mobile-menu">
              <ul>
                <li><button className="hamburger-button" onClick={toggleMenu}>Web page </button></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </div>
  );
}

export default Header;
