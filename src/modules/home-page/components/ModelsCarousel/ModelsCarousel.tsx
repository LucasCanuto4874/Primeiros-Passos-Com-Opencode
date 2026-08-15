import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';
import { modelsData } from '../../mocks/modelsData';
import './ModelsCarousel.css';

gsap.registerPlugin(Draggable, InertiaPlugin);

function ModelsCarousel() {
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
    <section className="models-carousel">
      <div className="models-carousel__header">
        <h2 className="models-carousel__title">Lookbook</h2>
      </div>

      <div className="models-carousel__container" ref={containerRef}>
        <div className="models-carousel__track" ref={trackRef}>
          {modelsData.map((model) => (
            <div key={model.id} className="models-carousel__card">
              <div className="models-carousel__image-wrapper">
                <img
                  src={model.imageSrc}
                  alt={model.glassesName}
                  className="models-carousel__image"
                />
              </div>
              <div className="models-carousel__info">
                <h3 className="models-carousel__glasses-name">{model.glassesName}</h3>
                <p className="models-carousel__price">
                  R$ {model.price.toFixed(2).replace('.', ',')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ModelsCarousel;
