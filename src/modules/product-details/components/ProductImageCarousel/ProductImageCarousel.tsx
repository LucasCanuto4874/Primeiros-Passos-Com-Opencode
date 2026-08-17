import { useRef, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import type { ProductImageCarouselProps } from '../../types/ProductDetails.types';
import './ProductImageCarousel.css';

const VIDEO_EXTENSIONS = ['.mp4', '.webm', '.ogg'];

function isVideo(src: string): boolean {
  return VIDEO_EXTENSIONS.some((ext) => src.toLowerCase().endsWith(ext));
}

function ProductImageCarousel({ images, alt }: ProductImageCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const currentY = useRef(0);

  const getMaxScroll = useCallback(() => {
    if (!containerRef.current || !trackRef.current) return 0;
    return trackRef.current.scrollHeight - containerRef.current.offsetHeight;
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const maxScroll = getMaxScroll();
      const delta = e.deltaY * 0.8;
      const newY = Math.max(-maxScroll, Math.min(0, currentY.current - delta));

      currentY.current = newY;

      gsap.to(trackRef.current, {
        y: newY,
        duration: 0.4,
        ease: 'power2.out',
        overwrite: true,
      });
    };

    container.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      container.removeEventListener('wheel', handleWheel);
    };
  }, [getMaxScroll]);

  useEffect(() => {
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      if (currentY.current < -maxScroll) {
        currentY.current = -maxScroll;
        gsap.set(trackRef.current, { y: -maxScroll });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [getMaxScroll]);

  return (
    <div className="product-image-carousel">
      <div className="product-image-carousel__container" ref={containerRef}>
        <div className="product-image-carousel__track" ref={trackRef}>
          {images.map((src: string, index: number) => (
            <div key={index} className="product-image-carousel__item">
              {isVideo(src) ? (
                <video
                  src={src}
                  className="product-image-carousel__video"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={src}
                  alt={`${alt} - vista ${index + 1}`}
                  className="product-image-carousel__image"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductImageCarousel;
