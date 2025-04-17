import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import AboutPage from './pages/AboutPage';
import HomePage from './pages/HomePage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/masterclasses" element={<div>Мастер-классы</div>} />
            <Route path="/plans" element={<div>Тарифы</div>} />
            <Route path="/schedule" element={<div>Расписание</div>} />
            <Route path="/products" element={<div>Продукция</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
