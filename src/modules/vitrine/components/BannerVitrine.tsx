import { BannerVitrineProps } from '../types/BannerVitrine.types';
import './BannerVitrine.css';

function BannerVitrine({ title, subtitle, imageUrl }: BannerVitrineProps) {
  return (
    <section className="banner-vitrine">
      <img src={imageUrl} alt={title} />
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </section>
  );
}

export default BannerVitrine;
