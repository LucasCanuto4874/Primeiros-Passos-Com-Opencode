import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './shared/context/CartProvider';
import HomePageView from './modules/home-page/view/HomePageView';
import ProductDetailsView from './modules/product-details/view/ProductDetailsView';
import CartView from './modules/cart/view/CartView';
import FaqView from './modules/faq/view/FaqView';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageView />} />
          <Route path="/product/:id" element={<ProductDetailsView />} />
          <Route path="/cart" element={<CartView />} />
          <Route path="/faq" element={<FaqView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
