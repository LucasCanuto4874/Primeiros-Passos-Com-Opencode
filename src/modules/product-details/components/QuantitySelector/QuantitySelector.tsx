import type { QuantitySelectorProps } from '../../types/ProductDetails.types';
import './QuantitySelector.css';

function QuantitySelector({ value, onChange, min = 1, max = 10 }: QuantitySelectorProps) {
  const handleDecrease = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrease = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="quantity-selector">
      <button
        className="quantity-selector__btn"
        onClick={handleDecrease}
        disabled={value <= min}
        aria-label="Decrease quantity"
      >
        -
      </button>
      <span className="quantity-selector__value">{value}</span>
      <button
        className="quantity-selector__btn"
        onClick={handleIncrease}
        disabled={value >= max}
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  );
}

export default QuantitySelector;
