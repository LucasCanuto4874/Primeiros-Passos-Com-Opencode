import { useState, useCallback } from 'react';
import type { ProductInfoProps, ProductSpec } from '../../types/ProductDetails.types';
import './ProductInfo.css';

function ProductInfo({ name, price, specs, onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);
  const [isSizeFitOpen, setIsSizeFitOpen] = useState(false);

  const handleAddToCart = useCallback(() => {
    onAddToCart(quantity);
  }, [onAddToCart, quantity]);

  return (
    <div className="product-info">
      <h1 className="product-info__name">{name}</h1>
      <p className="product-info__price">
        R$ {price.toFixed(2).replace('.', ',')}
      </p>

      <div className="product-info__accordion">
        <button
          className="product-info__accordion-trigger"
          onClick={() => setIsSpecsOpen(!isSpecsOpen)}
          type="button"
        >
          <span className="product-info__accordion-title">Specifications</span>
          <span className={`product-info__accordion-icon ${isSpecsOpen ? 'product-info__accordion-icon--open' : ''}`}>+</span>
        </button>
        <div className={`product-info__accordion-content ${isSpecsOpen ? 'product-info__accordion-content--open' : ''}`}>
          <dl className="product-info__specs-list">
            {specs.map((spec: ProductSpec) => (
              <div key={spec.label} className="product-info__spec-item">
                <dt className="product-info__spec-label">{spec.label}</dt>
                <dd className="product-info__spec-value">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="product-info__accordion">
        <button
          className="product-info__accordion-trigger"
          onClick={() => setIsSizeFitOpen(!isSizeFitOpen)}
          type="button"
        >
          <span className="product-info__accordion-title">Size and Fit</span>
          <span className={`product-info__accordion-icon ${isSizeFitOpen ? 'product-info__accordion-icon--open' : ''}`}>+</span>
        </button>
        <div className={`product-info__accordion-content ${isSizeFitOpen ? 'product-info__accordion-content--open' : ''}`}>
          <ul className="product-info__size-fit-list">
            <li className="product-info__size-fit-item">Frame width: 140mm</li>
            <li className="product-info__size-fit-item">Lens height: 45mm</li>
            <li className="product-info__size-fit-item">Regular fit</li>
            <li className="product-info__size-fit-item">Suitable for medium to large faces</li>
          </ul>
        </div>
      </div>

      <div className="product-info__actions">
        <div className="product-info__quantity">
          <select
            className="product-info__quantity-select"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
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
