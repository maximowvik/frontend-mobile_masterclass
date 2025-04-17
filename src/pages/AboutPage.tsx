import React from 'react';
import './PageStyle.css';

const AboutPage: React.FC = () => {
  return (
    <div className="page">
      <section className="hero">
        <h1>мастерская стекла</h1>
        <p className="subtitle">Место, где традиции встречаются с современностью</p>
      </section>

      <section className="content">
        <div className="section">
          <h2 className="section-title">О колледже</h2>
          <div className="section-content">
            <div className="text-content">
              <h2>ГАПОУ ВО "Гусевской стекольный колледж"</h2>
              <p>
                Наш колледж - это современное образовательное учреждение с богатой историей и традициями в области 
                стекольного производства. Мы готовим специалистов, которые продолжают и развивают традиции 
                стекольного дела.
              </p>
            </div>
            <div className="image-content">
              <img 
                src="http://62.60.228.119:3589/images/college.jpg" 
                alt="Здание колледжа" 
                className="section-image" 
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2 className="section-title">Наша мастерская</h2>
          <div className="section-content">
            <div className="text-content">
              <p>
                В нашей мастерской мы создаем уникальные изделия из стекла, используя традиционные техники и 
                современные технологии. Каждое изделие - это результат кропотливой работы и многолетнего опыта 
                наших мастеров.
              </p>
            </div>
            <div className="image-content">
              <img 
                src="http://62.60.228.119:3589/images/workshop.jpg" 
                alt="Наша мастерская" 
                className="section-image" 
              />
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Наши преимущества</h2>
          <div className="advantages-grid">
            <div className="advantage-item">
              <img 
                src="https://img5.arrivo.ru/e4da/6f/53783/0/Tina_Kjensli.jpg" 
                alt="Профессиональные мастера" 
                className="advantage-image" 
              />
              <h3>Профессиональные мастера</h3>
              <p>С многолетним опытом работы в стекольном производстве</p>
            </div>
            <div className="advantage-item">
              <img 
                src="https://guscollege.ru/upload/iblock/86d/51ggq025kan63jd7w03syndkfeleuupb/yCfA1pQDfgI.jpg" 
                alt="Современное оборудование" 
                className="advantage-image" 
              />
              <h3>Современное оборудование</h3>
              <p>Используем новейшие технологии и материалы</p>
            </div>
            <div className="advantage-item">
              <img 
                src="https://guscollege.ru/upload/iblock/1de/j9zhtd83npp0o2nhmiwlovshktuqc9cj/nKxPPYmVgso.jpg" 
                alt="Индивидуальный подход" 
                className="advantage-image" 
              />
              <h3>Индивидуальный подход</h3>
              <p>К каждому участнику мастер-класса</p>
            </div>
            <div className="advantage-item">
              <img 
                src="https://guscollege.ru/upload/iblock/3ab/w8pg4pqnzolbs2lgaae3dzkulxl3i2cv/Bezymyannyy.png" 
                alt="Создание изделий" 
                className="advantage-image" 
              />
              <h3>Создание изделий</h3>
              <p>Возможность создать собственное уникальное изделие</p>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="section-content reverse">
            <div className="text-content">
              <h2>История и традиции</h2>
              <p>
                Гусь-Хрустальный известен своими стекольными традициями с XVIII века. 
                Наш колледж продолжает эти традиции, обучая новое поколение мастеров 
                стекольного дела и знакомя всех желающих с этим удивительным искусством.
              </p>
              <p>
                В нашей мастерской вы можете не только увидеть процесс создания стеклянных 
                изделий, но и попробовать себя в роли стеклодува под руководством опытных мастеров.
              </p>
            </div>
            <div className="image-content">
              <img 
                src="https://avatars.mds.yandex.net/i?id=d2ff5a401585c8c971c3373a5757791c_l-4937889-images-thumbs&n=13" 
                alt="История стекольного дела" 
                className="section-image" 
              />
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Хотите стать частью нашей команды?</h2>
          <a href="https://guscollege.ru/" target="_blank" rel="noopener noreferrer" className="cta-button">
            Узнать больше
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage; 