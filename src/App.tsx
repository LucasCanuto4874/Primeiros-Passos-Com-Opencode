import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './shared/context/CartProvider';
import HomePageView from './modules/home-page/view/HomePageView';
import ProductDetailsView from './modules/product-details/view/ProductDetailsView';
import CartView from './modules/cart/view/CartView';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePageView />} />
          <Route path="/product/:id" element={<ProductDetailsView />} />
          <Route path="/cart" element={<CartView />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
