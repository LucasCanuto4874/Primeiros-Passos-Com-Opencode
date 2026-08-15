import DraggableCarousel from '../../../../shared/components/DraggableCarousel';
import { productsData } from '../../mocks/productsData';
import './ProductsShowcase.css';

function ProductsShowcase() {
  return (
    <section className="products-showcase">
      <div className="products-showcase__header">
        <h2 className="products-showcase__title">Shop</h2>
      </div>

      <DraggableCarousel
        className="products-showcase__container"
        trackClassName="products-showcase__track"
      >
        {productsData.map((product) => (
          <div key={product.id} className="products-showcase__card">
            <div className="products-showcase__image-wrapper">
              <img
                src={product.imageSrc}
                alt={product.productName}
                className="products-showcase__image"
              />
            </div>
            <div className="products-showcase__info">
              <h3 className="products-showcase__product-name">{product.productName}</h3>
              <p className="products-showcase__price">
                R$ {product.price.toFixed(2).replace('.', ',')}
              </p>
            </div>
          </div>
        ))}
      </DraggableCarousel>
    </section>
  );
}

export default ProductsShowcase;
