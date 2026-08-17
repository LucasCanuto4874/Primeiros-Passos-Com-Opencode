import { createContext, useContext } from 'react';
import type { CartContextType } from './CartContext.types';

const CartContext = createContext<CartContextType | undefined>(undefined);

function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export { CartContext, useCart };
