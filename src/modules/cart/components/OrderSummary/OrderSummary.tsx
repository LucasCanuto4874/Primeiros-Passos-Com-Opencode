import type { OrderSummaryProps } from '../../types/Cart.types';
import './OrderSummary.css';

function OrderSummary({ subtotal }: OrderSummaryProps) {
  const shipping = 0;
  const total = subtotal + shipping;

  return (
    <div className="order-summary">
      <h3 className="order-summary__title">Order Summary</h3>

      <div className="order-summary__rows">
        <div className="order-summary__row">
          <span className="order-summary__label">Subtotal</span>
          <span className="order-summary__value">
            R$ {subtotal.toFixed(2).replace('.', ',')}
          </span>
        </div>

        <div className="order-summary__row">
          <span className="order-summary__label">Shipping</span>
          <span className="order-summary__value order-summary__value--free">
            Free
          </span>
        </div>

        <div className="order-summary__row order-summary__row--total">
          <span className="order-summary__label">Total</span>
          <span className="order-summary__value order-summary__value--total">
            R$ {total.toFixed(2).replace('.', ',')}
          </span>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
