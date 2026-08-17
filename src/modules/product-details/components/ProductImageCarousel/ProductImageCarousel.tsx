import { useState } from 'react';
import type { ProductImageCarouselProps } from '../../types/ProductDetails.types';
import './ProductImageCarousel.css';

function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="product-image-carousel">
      <div className="product-image-carousel__main">
        <img
          src={images[activeIndex]}
          alt={alt}
          className="product-image-carousel__image"
        />
      </div>

      <div className="product-image-carousel__thumbs">
        {images.map((image: string, index: number) => (
          <button
            key={index}
            className={`product-image-carousel__thumb ${
              index === activeIndex ? 'product-image-carousel__thumb--active' : ''
            }`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver imagem ${index + 1}`}
          >
            <img src={image} alt={`${alt} - vista ${index + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}

export default ProductImageCarousel;
