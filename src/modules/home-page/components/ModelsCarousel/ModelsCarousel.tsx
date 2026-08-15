import { useRef } from 'react';
import { modelsData } from '../../mocks/modelsData';
import './ModelsCarousel.css';

function ModelsCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    const scrollAmount = 400;
    carouselRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="models-carousel">
      <div className="models-carousel__header">
        <h2 className="models-carousel__title">Lookbook</h2>
        <div className="models-carousel__nav">
          <button
            className="models-carousel__arrow"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            &#8249;
          </button>
          <button
            className="models-carousel__arrow"
            onClick={() => scroll('right')}
            aria-label="Próximo"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="models-carousel__track" ref={carouselRef}>
        {modelsData.map((model) => (
          <div key={model.id} className="models-carousel__card">
            <div className="models-carousel__image-wrapper">
              <img
                src={model.imageSrc}
                alt={model.glassesName}
                className="models-carousel__image"
              />
            </div>
            <div className="models-carousel__info">
              <h3 className="models-carousel__glasses-name">{model.glassesName}</h3>
              <p className="models-carousel__price">
                R$ {model.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ModelsCarousel;
