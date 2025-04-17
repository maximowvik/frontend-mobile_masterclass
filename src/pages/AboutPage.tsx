import React, { useEffect, useRef, useState } from 'react';
import './PageStyle.css';
import './AboutPage.css';

interface Slide {
  title: string;
  content: React.ReactNode;
  image: string;
  alt: string;
}

const AboutPage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const intervalDuration = 5000;

  const slides: Slide[] = [
    {
      title: "Общая информация о колледже",
      content: (
        <>
          <p>Гусевской стекольный колледж - старейшее учебное заведение города Гусь-Хрустальный, основанное в 1930 году. Территориально расположен в исторической части города, соседствуя с Музеем хрусталя, Краеведческим музеем и мальцевскими домиками, визитной карточкой г. Гусь-Хрустальный.</p>
          <p>Более 90 лет колледж остается единственным учебным заведением России, кто готовит кадры для стекольных предприятий. На стыке 20-21 веков мастерство стеклоделия, в т. ч. и подготовка кадров переживало трудные времена.</p>
        </>
      ),
      image: "/images/1.webp",
      alt: "История и расположение колледжа"
    },
    {
      title: "Создание кластера «Гусь-Хрустальный»",
      content: (
        <>
          <p>Всё изменилось в 2022 году. Произошла реорганизация колледжа, который возглавил к. п. н. Ю. А. Фильчаков. Вокруг колледжа объединились стекольные предприятия, был создан кластер «Гусь-Хрустальный», основным профилем колледжа опять стало стекло.</p>
          <p>Кластер «Гусь-Хрустальный» — это центр компетенций стеклоделия России.<br /><i>Миссия кластера: «Внедряем инновационные технологии в производство стекла, сохраняя славные традиции Акима Мальцова».</i></p>
        </>
      ),
      image: "/images/1.jpg",
      alt: "Создание кластера «Гусь-Хрустальный»"
    },
    {
      title: "Колледж сегодня",
      content: (
        <>
          <p>Это более 1500 студентов по 20 направлениям подготовки.<br />Колледж является участником Федеральной программы «Профессионалитет», членом Ассоциации стеклоделов, Центром профессионального образования в стекольной отрасли.</p>
          <p>В 2022 году начала работа своя стеклодувная мастерская.<br /> В 2024 году созданы 10 новых современных мастерских, в том числе мастерская Лэмпворка и Центр стекольных ремесел.</p>
          <p>На базе колледжа постоянно проходят Стратегические сессии стекольных предприятий, заседания Стеклосоюза России, экскурсии и мастер-классы для школьников, жителей и гостей города.</p>
        </>
      ),
      image: "/images/Craft Center coworking area.jpg",
      alt: "Колледж сегодня"
    },
    {
      title: "Программа «Волшебное стекло»",
      content: (
        <>
          <p>Входит в туристический маршрут ФГБУК «Государственный Владимиро-Суздальский историко-архитектурный и художественный музей-заповедник» и деревенский ретрит «Лес. Хрусталь.Суздаль».</p>
          <p><i>Двери колледжа открыты каждому, кто готов окунуться в волшебный мир стекла!</i></p>
        </>
      ),
      image: "/images/magic_glass_program.JPG",
      alt: "Программа «Волшебное стекло»"
    }
  ];

  const goToSlide = (index: number): void => {
    setCurrentSlide(index);
    resetAutoPlay(); // Сбрасываем авто-прокрутку при ручном переключении
  };

  const goToNextSlide = (): void => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  };

  const resetAutoPlay = (): void => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goToNextSlide, intervalDuration);
    }
  };

  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(goToNextSlide, intervalDuration);
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, slides.length]);

  // Останавливаем авто-прокрутку при наведении
  const handleMouseEnter = (): void => {
    setIsAutoPlaying(false);
  };

  // Возобновляем авто-прокрутку при уходе курсора
  const handleMouseLeave = (): void => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="page">
      <section className="hero">
        <h1>Мастерская стекла</h1>
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
          <h2 className='section-title'>Наши преимущества</h2>
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
              <h2>История и расположение колледжа</h2>
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

        <div className="section">
          <h2 className="section-title">История и развитие</h2>
          <div
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="carousel-slide">
                  <div className={`section-content ${index % 2 === 0 ? '' : 'reverse'}`}>
                    <div className='text-content' style={{ textAlign: 'left' }}>
                      <h2>{slide.title}</h2>
                      {slide.content}
                    </div>
                    <div className="image-content">
                      <img
                        src={slide.image}
                        alt={slide.alt}
                        className="section-image"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-dots">
              {slides.map((_, index) => (
                <button
                  key={index}
                  className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="cta-section">
          <h2>Хотите стать частью нашей команды?</h2>
          <a
            href="https://guscollege.ru/"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Узнать больше
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;