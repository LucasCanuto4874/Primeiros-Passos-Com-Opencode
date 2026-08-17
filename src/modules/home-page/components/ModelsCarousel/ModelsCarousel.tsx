import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import DraggableCarousel from '../../../../shared/components/DraggableCarousel';
import { useCart } from '../../../../shared/context/CartContext';
import AddToCartToast from '../../../../shared/components/AddToCartToast/AddToCartToast';
import { modelsData } from '../../mocks/modelsData';
import './ModelsCarousel.css';

function ModelsCarousel() {
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleAddToCart = useCallback(
    (model: (typeof modelsData)[0], e: React.MouseEvent) => {
      e.stopPropagation();
      addItem(
        {
          id: model.id,
          name: model.glassesName,
          price: model.price,
          imageSrc: model.imageSrc,
          source: 'model',
        },
        1
      );
      setToastMessage(`${model.glassesName} added to cart`);
      setToastVisible(true);
    },
    [addItem]
  );

  const handleImageClick = useCallback(
    (modelId: number) => {
      navigate(`/product/model-${modelId}`);
    },
    [navigate]
  );

  const handleToastClose = useCallback(() => {
    setToastVisible(false);
  }, []);

  return (
    <section className="models-carousel">
      <div className="models-carousel__header">
        <h2 className="models-carousel__title">LOOKBOOK</h2>
      </div>

      <DraggableCarousel
        className="models-carousel__container"
        trackClassName="models-carousel__track"
      >
        {modelsData.map((model) => (
          <div key={model.id} className="models-carousel__card">
            <div
              className="models-carousel__image-wrapper"
              onClick={() => handleImageClick(model.id)}
            >
              <img
                src={model.imageSrc}
                alt={model.glassesName}
                className="models-carousel__image"
              />
              <div className="models-carousel__info">
                <h3 className="models-carousel__glasses-name">{model.glassesName}</h3>
                <p className="models-carousel__price">
                  R$ {model.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
              <button
                className="models-carousel__add-btn"
                onClick={(e) => handleAddToCart(model, e)}
                aria-label={`Add ${model.glassesName} to cart`}
              >
                Add to cart
              </button>
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

export default ModelsCarousel;
