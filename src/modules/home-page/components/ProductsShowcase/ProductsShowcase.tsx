import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DraggableCarousel from '../../../../shared/components/DraggableCarousel';
import { useCart } from '../../../../shared/context/CartContext';
import AddToCartToast from '../../../../shared/components/AddToCartToast/AddToCartToast';
import { productsData } from '../../mocks/productsData';
import './ProductsShowcase.css';

function ProductsShowcase() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = useCallback(
    (product: (typeof productsData)[0], e: React.MouseEvent | React.KeyboardEvent) => {
      e.stopPropagation();
      addItem(
        {
          id: product.id,
          name: product.productName,
          price: product.price,
          imageSrc: product.imageSrc,
          source: 'product',
        },
        1
      );
      setToastMessage(`${product.productName} added to cart`);
      setToastVisible(true);
    },
    [addItem]
  );

  const handleImageClick = useCallback(
    (productId: number) => {
      navigate(`/product/product-${productId}`);
    },
    [navigate]
  );

  const handleToastClose = useCallback(() => {
    setToastVisible(false);
  }, []);

  return (
    <section className="products-showcase">
      <div className="products-showcase__header">
        <h2 className="products-showcase__title">PRODUCTS</h2>
        <p className="products-showcase__subtitle">Designed objects for the modern gaze</p>
      </div>

      <DraggableCarousel
        className="products-showcase__container"
        trackClassName="products-showcase__track"
      >
        {productsData.map((product) => (
          <div key={product.id} className="products-showcase__card">
            <div
              className="products-showcase__image-wrapper"
              onClick={() => handleImageClick(product.id)}
            >
              <img
                src={product.imageSrc}
                alt={product.productName}
                className="products-showcase__image"
              />
            </div>
            <div className="products-showcase__info">
              <span
                className="products-showcase__add-link"
                onClick={(e) => handleAddToCart(product, e)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleAddToCart(product, e);
                  }
                }}
              >
                Add to cart
              </span>
              <h3 className="products-showcase__product-name">{product.productName}</h3>
              <p className="products-showcase__price">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
        ))}
      </DraggableCarousel>

      <AddToCartToast
        message={toastMessage}
        isVisible={toastVisible}
        onClose={handleToastClose}
      />
    </section>
  );
}

export default ProductsShowcase;
