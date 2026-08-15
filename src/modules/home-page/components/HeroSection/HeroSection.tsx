import { useRef } from 'react';
import { heroSlides } from '../../mocks/heroData';
import './HeroSection.css';

function HeroSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="hero-section">
      <div className="hero-section__carousel" ref={carouselRef}>
        {heroSlides.map((slide) => (
          <div key={slide.id} className="hero-section__slide">
            <video
              className="hero-section__video"
              src={slide.videoSrc}
              autoPlay
              loop
              muted
              playsInline
            />
            <div className="hero-section__overlay">
              <div className="hero-section__content">
                <h2 className="hero-section__collection">{slide.collectionName}</h2>
                <p className="hero-section__description">{slide.description}</p>
                <div className="hero-section__buttons">
                  <button className="hero-section__btn hero-section__btn--primary">
                    Shop Now
                  </button>
                  <button className="hero-section__btn hero-section__btn--secondary">
                    View Campaign
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        className="hero-section__arrow hero-section__arrow--left"
        onClick={() => scroll('left')}
        aria-label="Anterior"
      >
        &#8249;
      </button>
      <button
        className="hero-section__arrow hero-section__arrow--right"
        onClick={() => scroll('right')}
        aria-label="Próximo"
      >
        &#8250;
      </button>
    </section>
  );
}

export default HeroSection;
