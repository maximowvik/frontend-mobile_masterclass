import React from 'react';
import './HomePage.css';

const HomePage: React.FC = () => {
    return (
        <div className="page">
            <section className="hero home-hero">
                <h1>Мастер-классы, где стекло оживает</h1>
                <p className="subtitle">Выдувание. Лэмпворк. Гравировка</p>
                <a href="/" target="_blank" rel="noopener noreferrer" className="cta-button">
                    Записаться на мастер-класс
                </a>
            </section>
            <section className="content home-content">
                <div className="section">
                    <h2 className="section-title">Наши форматы</h2>
                    <div className="advantages-grid">
                        <div className="advantage-item small-image">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Emoji_u1f525.svg/1200px-Emoji_u1f525.svg.png" 
                                alt="Мастер-класс по выдуванию" 
                                className="advantage-image" 
                            />
                            <h3>Мастер-класс по выдуванию</h3>
                            <p>Создайте уникальное изделие из стекла под руководством опытного мастера</p>
                            <a href="/" target="_blank" rel="noopener noreferrer" className="cta-button">Подробнее</a>
                        </div>
                        <div className="advantage-item small-image">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Fluent_Emoji_flat_1f48e.svg/800px-Fluent_Emoji_flat_1f48e.svg.png" 
                                alt="Лэмпворк" 
                                className="advantage-image" 
                            />
                            <h3>Лэмпворк</h3>
                            <p>Научитесь создавать изящные украшения из стекла в технике лэмпворк</p>
                            <a href="/" target="_blank" rel="noopener noreferrer" className="cta-button">Подробнее</a>
                        </div>
                        <div className="advantage-item small-image">
                            <img 
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Fluent_Emoji_Color_2728.svg/640px-Fluent_Emoji_Color_2728.svg.png" 
                                alt="Гравировка" 
                                className="advantage-image" 
                            />
                            <h3>Гравировка</h3>
                            <p>Освойте искусство гравировки по стеклу и создайте неповторимый дизайн</p>
                            <a href="/" target="_blank" rel="noopener noreferrer" className="cta-button">Подробнее</a>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <h2 className="section-title">О мастерской</h2>
                    <div className="section-content">
                        <div className="text-content">
                        <h2>Мы — небольшая стеклодувная студия, где каждый может создать своё стекло</h2>
                        <p>Стекло требует времени и внимания — как и творчество</p>
                        </div>
                        <div className="image-content">
                        <img 
                            src="http://62.60.228.119:3589/images/master.jpg" 
                            alt="Здание колледжа" 
                            className="section-image" 
                        />
                        </div>
                    </div>
                </div>
            </section>
        </div>
        
    );
};

export default HomePage;