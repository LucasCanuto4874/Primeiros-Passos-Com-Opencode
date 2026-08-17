import { useState, useCallback } from 'react';
import type { ProductInfoProps, ProductSpec } from '../../types/ProductDetails.types';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import './ProductInfo.css';

function ProductInfo({ name, price, description, specs, onAddToCart }: ProductInfoProps) {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = useCallback(() => {
    onAddToCart(quantity);
  }, [onAddToCart, quantity]);

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
          <QuantitySelector value={quantity} onChange={setQuantity} />
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
