import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../home-page/components/Header/Header';
import { useCart } from '../../../shared/context/CartContext';
import CartProductList from '../components/CartProductList/CartProductList';
import CartPayment from '../components/CartPayment/CartPayment';
import Footer from '../../../shared/components/Footer/Footer';
import './CartView.css';

function CartView() {
  const navigate = useNavigate();
  const { getTotal, clearCart } = useCart();
  const [showSuccess, setShowSuccess] = useState(false);

  const handleCheckout = useCallback(() => {
    setShowSuccess(true);
    setTimeout(() => {
      clearCart();
      navigate('/');
    }, 3000);
  }, [clearCart, navigate]);

  return (
    <main className="cart-view">
      <Header forceScrolled />

      {showSuccess && (
        <div className="cart-view__success-overlay">
          <div className="cart-view__success-modal">
            <h2 className="cart-view__success-title">Purchase completed successfully!</h2>
            <p className="cart-view__success-message">
              Thank you for choosing Gentle Beast. You will receive a confirmation email shortly.
            </p>
          </div>
        </div>
      )}

      <div className="cart-view__content">
        <div className="cart-view__products-section">
          <CartProductList />
        </div>

        <div className="cart-view__payment-section">
          <CartPayment subtotal={getTotal()} onCheckout={handleCheckout} />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default CartView;
