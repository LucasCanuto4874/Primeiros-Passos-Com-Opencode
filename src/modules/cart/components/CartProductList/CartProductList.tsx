import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../shared/context/CartContext';
import CartProductItem from '../CartProductItem/CartProductItem';
import './CartProductList.css';

function CartProductList() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity } = useCart();

  const handleUpdateQuantity = useCallback(
    (id: number, source: 'model' | 'product', quantity: number) => {
      updateQuantity(id, source, quantity);
    },
    [updateQuantity]
  );

  const handleRemove = useCallback(
    (id: number, source: 'model' | 'product') => {
      removeItem(id, source);
    },
    [removeItem]
  );

  if (items.length === 0) {
    return (
      <div className="cart-product-list cart-product-list--empty">
        <p className="cart-product-list__empty-message">
          Your cart is empty
        </p>
        <button
          className="cart-product-list__continue-btn"
          onClick={() => navigate('/')}
        >
          Continue shopping
        </button>
      </div>
    );
  }

  return (
    <div className="cart-product-list">
      {items.map((item) => (
        <CartProductItem
          key={`${item.id}-${item.source}`}
          id={item.id}
          name={item.name}
          price={item.price}
          imageSrc={item.imageSrc}
          quantity={item.quantity}
          source={item.source}
          onUpdateQuantity={(quantity) =>
            handleUpdateQuantity(item.id, item.source, quantity)
          }
          onRemove={() => handleRemove(item.id, item.source)}
        />
      ))}
    </div>
  );
}

export default CartProductList;
