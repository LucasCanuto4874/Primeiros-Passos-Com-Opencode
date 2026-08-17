import { useState, useCallback } from 'react';
import type { CartPaymentProps } from '../../types/Cart.types';
import { paymentMethods } from '../../mocks/paymentMethods';
import OrderSummary from '../OrderSummary/OrderSummary';
import './CartPayment.css';

function CartPayment({ subtotal, onCheckout }: CartPaymentProps) {
  const [selectedMethod, setSelectedMethod] = useState(() => {
    const firstMethod = paymentMethods[0];
    return firstMethod ? firstMethod.id : '';
  });

  const handleCheckout = useCallback(() => {
    onCheckout();
  }, [onCheckout]);

  return (
    <div className="cart-payment">
      <OrderSummary subtotal={subtotal} />

      <div className="cart-payment__methods">
        <h3 className="cart-payment__title">Payment Method</h3>

        <div className="cart-payment__options">
          {paymentMethods.map((method) => (
            <label
              key={method.id}
              className={`cart-payment__option ${
                selectedMethod === method.id ? 'cart-payment__option--selected' : ''
              }`}
            >
              <input
                type="radio"
                name="payment-method"
                value={method.id}
                checked={selectedMethod === method.id}
                onChange={() => setSelectedMethod(method.id)}
                className="cart-payment__radio"
              />
              <div className="cart-payment__option-content">
                <span className="cart-payment__option-label">{method.label}</span>
                <span className="cart-payment__option-description">
                  {method.description}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

      <button
        className="cart-payment__checkout-btn"
        onClick={handleCheckout}
      >
        Finalize Purchase
      </button>
    </div>
  );
}

export default CartPayment;
