import { useEffect } from 'react';
import { FiCheck } from 'react-icons/fi';
import type { AddToCartToastProps } from './AddToCartToast.types';
import './AddToCartToast.css';

function AddToCartToast({ message, isVisible, onClose }: AddToCartToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <div className={`add-to-cart-toast ${isVisible ? 'add-to-cart-toast--visible' : ''}`}>
      <span className="add-to-cart-toast__icon">
        <FiCheck size={14} />
      </span>
      {message}
    </div>
  );
}

export default AddToCartToast;
