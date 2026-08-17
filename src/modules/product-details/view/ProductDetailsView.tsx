import { useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../../home-page/components/Header/Header';
import { useCart } from '../../../shared/context/CartContext';
import AddToCartToast from '../../../shared/components/AddToCartToast/AddToCartToast';
import ProductImageCarousel from '../components/ProductImageCarousel/ProductImageCarousel';
import ProductInfo from '../components/ProductInfo/ProductInfo';
import { getProductDetailById } from '../mocks/productDetailsData';
import './ProductDetailsView.css';

function ProductDetailsView() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [toastVisible, setToastVisible] = useState(false);

  const product = id !== undefined ? getProductDetailById(id) : undefined;

  const handleAddToCart = useCallback(
    (quantity: number) => {
      if (!product || id === undefined) return;

      const currentProduct = product;
      const productId = currentProduct.id;
      const parts = productId.split('-');
      const secondPart = parts[1];
      const numericId = secondPart !== undefined ? parseInt(secondPart, 10) : 0;
      addItem(
        {
          id: isNaN(numericId) ? 0 : numericId,
          name: currentProduct.name,
          price: currentProduct.price,
          imageSrc: currentProduct.imageSrc,
          source: productId.startsWith('model') ? 'model' : 'product',
        },
        quantity
      );
      setToastVisible(true);
    },
    [product, id, addItem]
  );

  const handleToastClose = useCallback(() => {
    setToastVisible(false);
  }, []);

  if (!product) {
    return (
      <main className="product-details-view">
        <Header forceScrolled />
        <div className="product-details-view__not-found">
          <h2>Product not found</h2>
          <button onClick={() => navigate('/')}>Back to home page</button>
        </div>
      </main>
    );
  }

  return (
    <main className="product-details-view">
      <Header forceScrolled />
      <div className="product-details-view__content">
        <div className="product-details-view__image-section">
          <ProductImageCarousel images={product.images} alt={product.name} />
        </div>
        <div className="product-details-view__info-section">
          <ProductInfo
            name={product.name}
            price={product.price}
            description={product.description}
            specs={product.specs}
            onAddToCart={handleAddToCart}
          />
        </div>
      </div>

      <AddToCartToast
        message={`${product.name} added to cart`}
        isVisible={toastVisible}
        onClose={handleToastClose}
      />
    </main>
  );
}

export default ProductDetailsView;
