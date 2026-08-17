import type { ZoomImageProps } from './ZoomImage.types';
import './ZoomImage.css';

function ZoomImage({
  src,
  alt,
  zoom = 1,
  zoomOnHover,
  objectPosition = 'center',
  className = '',
}: ZoomImageProps) {
  const containerClass = `zoom-image__container ${className} ${zoomOnHover ? 'zoom-image--hoverable' : ''}`.trim();

  return (
    <div
      className={containerClass}
      style={{ '--zoom': zoom, '--zoom-hover': zoomOnHover } as React.CSSProperties}
    >
      <img
        src={src}
        alt={alt}
        className="zoom-image__img"
        style={{ objectPosition }}
      />
    </div>
  );
}

export default ZoomImage;
