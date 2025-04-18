import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';
import logo from '../../assets/logo.svg';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Функция для проверки активного пути
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="Логотип колледжа" className="logo-image" />
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <h1>ГАПОУ ВО "Гусевской<br /> стекольный колледж"</h1>
          </Link>
        </div>
        <button 
          className={`burger-menu ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`navigation ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/masterclasses" 
                className={`masterclass_button ${isActive('/masterclasses') ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Мастер классы
              </Link>
            </li>
            <li>
              <Link 
                to="/plans" 
                className={`plans_button ${isActive('/plans') ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Тарифы
              </Link>
            </li>
            <li>
              <Link 
                to="/schedule" 
                className={`schedule_button ${isActive('/schedule') ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Расписание
              </Link>
            </li>
            <li>
              <Link 
                to="/products" 
                className={`products_button ${isActive('/products') ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                Продукция
              </Link>
            </li>
            <li>
              <Link 
                to="/about" 
                className={`about_button ${isActive('/about') ? 'active' : ''}`} 
                onClick={() => setIsMenuOpen(false)}
              >
                О нас
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;