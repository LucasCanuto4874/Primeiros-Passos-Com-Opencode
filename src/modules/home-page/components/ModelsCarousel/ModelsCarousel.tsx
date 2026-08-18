import DraggableCarousel from '../../../../shared/components/DraggableCarousel';
import { modelsData } from '../../mocks/modelsData';
import './ModelsCarousel.css';

function ModelsCarousel() {
  return (
    <section className="models-carousel">
      <div className="models-carousel__header">
        <h2 className="models-carousel__title">CONCEPT</h2>
        <p className="models-carousel__subtitle">Visual narratives exploring form and identity</p>
      </div>

      <DraggableCarousel
        className="models-carousel__container"
        trackClassName="models-carousel__track"
      >
        {modelsData.map((model) => (
          <div key={model.id} className="models-carousel__card">
            <div className="models-carousel__image-wrapper">
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
            </div>
          </div>
        ))}
      </DraggableCarousel>
    </section>
  );
}

export default ModelsCarousel;
