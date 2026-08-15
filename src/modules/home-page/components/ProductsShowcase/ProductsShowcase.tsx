import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { FiShoppingBag } from 'react-icons/fi';
import { productsData } from '../../mocks/productsData';
import './ProductsShowcase.css';

gsap.registerPlugin(Draggable, InertiaPlugin);

function ProductsShowcase() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const draggableInstance = useRef<InstanceType<typeof Draggable> | null>(null);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const updateBounds = () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }

      const trackWidth = trackRef.current!.scrollWidth;
      const containerWidth = containerRef.current!.offsetWidth;

      const instances = Draggable.create(trackRef.current, {
        type: 'x',
        bounds: {
          minX: -(trackWidth - containerWidth),
          maxX: 0,
        },
        inertia: true,
        cursor: 'grab',
        activeCursor: 'grabbing',
      });

      draggableInstance.current = instances[0] as unknown as InstanceType<typeof Draggable>;
    };

    updateBounds();

    window.addEventListener('resize', updateBounds);

    return () => {
      window.removeEventListener('resize', updateBounds);
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
    };
  }, []);

  return (
    <section className="products-showcase">
      <div className="products-showcase__header">
        <h2 className="products-showcase__title">Shop</h2>
      </div>

      <div className="products-showcase__container" ref={containerRef}>
        <div className="products-showcase__track" ref={trackRef}>
          {productsData.map((product) => (
            <div key={product.id} className="products-showcase__card">
              <div className="products-showcase__image-wrapper">
                <img
                  src={product.imageSrc}
                  alt={product.productName}
                  className="products-showcase__image"
                />
                <button
                  className="products-showcase__add-btn"
                  aria-label={`Adicionar ${product.productName} ao carrinho`}
                >
                  <FiShoppingBag size={18} />
                </button>
              </div>
              <div className="products-showcase__info">
                <h3 className="products-showcase__product-name">{product.productName}</h3>
                <p className="products-showcase__price">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsShowcase;
