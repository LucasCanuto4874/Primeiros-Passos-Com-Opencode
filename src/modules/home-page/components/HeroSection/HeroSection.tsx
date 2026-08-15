import { useRef, useState, useEffect, useCallback } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { heroSlides } from '../../mocks/heroData';
import './HeroSection.css';

gsap.registerPlugin(Draggable);

const AUTO_PLAY_INTERVAL = 5000;

function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<HTMLVideoElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef<number | null>(null);
  const draggableInstance = useRef<InstanceType<typeof Draggable> | null>(null);

  const goToSlide = useCallback((index: number, duration = 0.8) => {
    if (!trackRef.current || !containerRef.current) return;
    const slideWidth = containerRef.current.offsetWidth;
    const targetX = -slideWidth * index;

    gsap.to(trackRef.current, {
      x: targetX,
      duration,
      ease: 'power3.out',
    });

    setActiveIndex(index);
    setProgress(0);

    if (draggableInstance.current) {
      draggableInstance.current.disable();
      draggableInstance.current.enable();
    }
  }, []);

  const nextSlide = useCallback(() => {
    const nextIndex = (activeIndex + 1) % heroSlides.length;
    goToSlide(nextIndex);
  }, [activeIndex, goToSlide]);

  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === activeIndex) {
        video.currentTime = 0;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [activeIndex]);

  useEffect(() => {
    if (!containerRef.current || !trackRef.current) return;

    const slideWidth = containerRef.current.offsetWidth;

    const instances = Draggable.create(trackRef.current, {
      type: 'x',
      bounds: {
        minX: -(slideWidth * (heroSlides.length - 1)),
        maxX: 0,
      },
      inertia: true,
      onDragEnd: () => {
        if (!trackRef.current || !containerRef.current) return;
        const currentX = gsap.getProperty(trackRef.current, 'x') as number;
        const newIndex = Math.round(Math.abs(currentX) / slideWidth);
        goToSlide(Math.min(Math.max(newIndex, 0), heroSlides.length - 1));
      },
    });

    draggableInstance.current = instances[0] as unknown as InstanceType<typeof Draggable>;

    return () => {
      if (draggableInstance.current) {
        draggableInstance.current.kill();
      }
    };
  }, [goToSlide]);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (AUTO_PLAY_INTERVAL / 50));
      });
    }, 50);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [nextSlide]);

  return (
    <section className="hero-section">
      <div className="hero-section__container" ref={containerRef}>
        <div className="hero-section__track" ref={trackRef}>
          {heroSlides.map((slide, index) => (
            <div key={slide.id} className="hero-section__slide">
              <video
                className="hero-section__video"
                ref={(el) => { videoRefs.current[index] = el as HTMLVideoElement; }}
                src={slide.videoSrc}
                loop
                muted
                playsInline
              />
              <div className="hero-section__overlay">
                <div className="hero-section__content">
                  <h2 className="hero-section__collection">{slide.collectionName}</h2>
                  <p className="hero-section__description">{slide.description}</p>
                  <div className="hero-section__buttons">
                    <button className="hero-section__btn hero-section__btn--primary">
                      Shop Now
                    </button>
                    <button className="hero-section__btn hero-section__btn--secondary">
                      View Campaign
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hero-section__progress">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`hero-section__progress-bar ${index === activeIndex ? 'hero-section__progress-bar--active' : ''}`}
            onClick={() => goToSlide(index)}
          >
            <div
              className="hero-section__progress-fill"
              style={{ width: index === activeIndex ? `${progress}%` : index < activeIndex ? '100%' : '0%' }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HeroSection;
