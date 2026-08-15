import { useRef, useEffect, ReactNode } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { InertiaPlugin } from 'gsap/InertiaPlugin';

gsap.registerPlugin(Draggable, InertiaPlugin);

interface DraggableCarouselProps {
  children: ReactNode;
  className?: string;
  trackClassName?: string;
}

function DraggableCarousel({
  children,
  className = '',
  trackClassName = '',
}: DraggableCarouselProps) {
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
    <div className={className} ref={containerRef}>
      <div className={trackClassName} ref={trackRef}>
        {children}
      </div>
    </div>
  );
}

export default DraggableCarousel;
