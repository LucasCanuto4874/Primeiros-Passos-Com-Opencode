import Header from '../components/Header/Header';
import HeroSection from '../components/HeroSection/HeroSection';
import ModelsCarousel from '../components/ModelsCarousel/ModelsCarousel';
import ProductsShowcase from '../components/ProductsShowcase/ProductsShowcase';
import Footer from '../../../shared/components/Footer/Footer';
import './HomePageView.css';

function HomePageView() {
  return (
    <main className="home-page-view">
      <Header />
      <HeroSection />
      <ModelsCarousel />
      <ProductsShowcase />
      <Footer />
    </main>
  );
}

export default HomePageView;
