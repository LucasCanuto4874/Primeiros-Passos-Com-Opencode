import { useRef } from 'react';
import { FiShoppingBag } from 'react-icons/fi';
import { productsData } from '../../mocks/productsData';
import './ProductsShowcase.css';

function ProductsShowcase() {
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
    <section className="products-showcase">
      <div className="products-showcase__header">
        <h2 className="products-showcase__title">Shop</h2>
        <div className="products-showcase__nav">
          <button
            className="products-showcase__arrow"
            onClick={() => scroll('left')}
            aria-label="Anterior"
          >
            &#8249;
          </button>
          <button
            className="products-showcase__arrow"
            onClick={() => scroll('right')}
            aria-label="Próximo"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div className="products-showcase__track" ref={carouselRef}>
        {productsData.map((product) => (
          <div key={product.id} className="products-showcase__card">
            <div className="products-showcase__image-wrapper">
              <img
                src={product.imageSrc}
                alt={product.productName}
                className="products-showcase__image"
              />
              <button
                className="products-showcase__add-btn"
                aria-label={`Adicionar ${product.productName} ao carrinho`}
              >
                <FiShoppingBag size={18} />
              </button>
            </div>
            <div className="products-showcase__info">
              <h3 className="products-showcase__product-name">{product.productName}</h3>
              <p className="products-showcase__price">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProductsShowcase;
