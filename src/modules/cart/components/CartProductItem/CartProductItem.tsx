import { useCallback } from 'react';
import type { CartProductItemProps } from '../../types/Cart.types';
import CartQuantityDropdown from '../CartQuantityDropdown/CartQuantityDropdown';
import './CartProductItem.css';

function CartProductItem({
  name,
  price,
  imageSrc,
  quantity,
  onUpdateQuantity,
  onRemove,
}: CartProductItemProps) {
  const handleQuantityChange = useCallback(
    (newQuantity: number) => {
      onUpdateQuantity(newQuantity);
    },
    [onUpdateQuantity]
  );

  return (
    <div className="cart-product-item">
      <div className="cart-product-item__image-wrapper">
        <img
          src={imageSrc}
          alt={name}
          className="cart-product-item__image"
          style={{ objectPosition: '50% 30%' }}
        />
      </div>

      <div className="cart-product-item__info">
        <h3 className="cart-product-item__name">{name}</h3>
        <p className="cart-product-item__price">
          R$ {(price * quantity).toFixed(2).replace('.', ',')}
        </p>

        <div className="cart-product-item__actions">
          <CartQuantityDropdown
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={5}
          />
          <button
            className="cart-product-item__remove-btn"
            onClick={onRemove}
            aria-label={`Remove ${name} from cart`}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartProductItem;
