import { useReducer, useEffect, useCallback, type ReactNode } from 'react';
import { CartContext } from './CartContext';
import type { CartItem, CartAction, CartItemSource } from './CartContext.types';

const STORAGE_KEY = '@gentle-beast:cart';

function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD_ITEM': {
      const { item, quantity } = action.payload;
      const existingIndex = state.findIndex(
        (i) => i.id === item.id && i.source === item.source
      );

      if (existingIndex >= 0) {
        const updated = [...state];
        const existingItem = updated[existingIndex];
        if (existingItem) {
          updated[existingIndex] = {
            ...existingItem,
            quantity: existingItem.quantity + quantity,
          };
        }
        return updated;
      }

      const newItem: CartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        imageSrc: item.imageSrc,
        source: item.source,
        quantity,
      };
      return [...state, newItem];
    }

    case 'REMOVE_ITEM': {
      const { id, source } = action.payload;
      return state.filter((i) => !(i.id === id && i.source === source));
    }

    case 'UPDATE_QUANTITY': {
      const { id, source, quantity } = action.payload;
      if (quantity <= 0) {
        return state.filter((i) => !(i.id === id && i.source === source));
      }
      return state.map((i) =>
        i.id === id && i.source === source ? { ...i, quantity } : i
      );
    }

    case 'CLEAR_CART':
      return [];

    case 'LOAD_CART':
      return action.payload;

    default:
      return state;
  }
}

function loadCartFromStorage(): CartItem[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch {
    // ignore parse errors
  }
  return [];
}

type CartProviderProps = {
  children: ReactNode;
};

function CartProvider({ children }: CartProviderProps) {
  const [items, dispatch] = useReducer(cartReducer, [], loadCartFromStorage);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addItem = useCallback(
    (item: Omit<CartItem, 'quantity'>, quantity: number = 1) => {
      const cartItem: CartItem = { ...item, quantity };
      dispatch({ type: 'ADD_ITEM', payload: { item: cartItem, quantity } });
    },
    []
  );

  const removeItem = useCallback((id: number, source: CartItemSource) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, source } });
  }, []);

  const updateQuantity = useCallback(
    (id: number, source: CartItemSource, quantity: number) => {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, source, quantity } });
    },
    []
  );

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  const getTotal = useCallback(() => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  }, [items]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };
