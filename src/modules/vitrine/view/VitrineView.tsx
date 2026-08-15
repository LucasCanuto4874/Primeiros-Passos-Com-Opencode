import BannerVitrine from '../components/BannerVitrine';
import vitrineMock from '../mocks/vitrine.mock.json';
import { VitrineMock } from '../types/VitrineView.types';
import './VitrineView.css';

const mock: VitrineMock = vitrineMock;

function VitrineView() {
  return (
    <main className="vitrine-view">
      <BannerVitrine
        title={mock.banner.title}
        subtitle={mock.banner.subtitle}
        imageUrl={mock.banner.imageUrl}
      />
    </main>
  );
}

export default VitrineView;
