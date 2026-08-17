import { useCallback } from 'react';
import type { CartProductItemProps } from '../../types/Cart.types';
import QuantitySelector from '../../../product-details/components/QuantitySelector/QuantitySelector';
import ZoomImage from '../../../../components/ZoomImage/ZoomImage';
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
        <ZoomImage
          src={imageSrc}
          alt={name}
          zoom={1.2}
          zoomOnHover={1.4}
          objectPosition="50% 30%"
        />
      </div>

      <div className="cart-product-item__info">
        <h3 className="cart-product-item__name">{name}</h3>
        <p className="cart-product-item__price">
          R$ {(price * quantity).toFixed(2).replace('.', ',')}
        </p>

        <div className="cart-product-item__quantity-row">
          <QuantitySelector
            value={quantity}
            onChange={handleQuantityChange}
            min={1}
            max={10}
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
