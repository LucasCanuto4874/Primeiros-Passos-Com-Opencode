import { useState, useCallback, useRef, useEffect } from 'react';
import type { ProductInfoProps, ProductSpec } from '../../types/ProductDetails.types';
import './ProductInfo.css';

function ProductInfo({ name, price, description, specs, onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = useCallback(() => {
    onAddToCart(quantity);
  }, [onAddToCart, quantity]);

  const handleSelect = useCallback((num: number) => {
    setQuantity(num);
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="product-info">
      <h1 className="product-info__name">{name}</h1>
      <p className="product-info__price">
        R$ {price.toFixed(2).replace('.', ',')}
      </p>

      <div className="product-info__description">
        <p>{description}</p>
      </div>

      <div className="product-info__specs">
        <h3 className="product-info__specs-title">Specifications</h3>
        <dl className="product-info__specs-list">
          {specs.map((spec: ProductSpec) => (
            <div key={spec.label} className="product-info__spec-item">
              <dt className="product-info__spec-label">{spec.label}</dt>
              <dd className="product-info__spec-value">{spec.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="product-info__actions">
        <div className="product-info__quantity">
          <span className="product-info__quantity-label">Quantity</span>
          <div className="product-info__dropdown" ref={dropdownRef}>
            <button
              className="product-info__dropdown-trigger"
              onClick={() => setIsOpen(!isOpen)}
              type="button"
            >
              <span>{quantity}</span>
              <svg
                className={`product-info__dropdown-arrow ${isOpen ? 'product-info__dropdown-arrow--open' : ''}`}
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L7 7L13 1"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className={`product-info__dropdown-list ${isOpen ? 'product-info__dropdown-list--open' : ''}`}>
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  className={`product-info__dropdown-item ${num === quantity ? 'product-info__dropdown-item--active' : ''}`}
                  onClick={() => handleSelect(num)}
                  type="button"
                >
                  {num}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          className="product-info__add-btn"
          onClick={handleAddToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
