export type CartItemSource = 'model' | 'product';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  quantity: number;
  source: CartItemSource;
};

export type CartContextType = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (id: number, source: CartItemSource) => void;
  updateQuantity: (id: number, source: CartItemSource, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
};

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { item: CartItem; quantity: number } }
  | { type: 'REMOVE_ITEM'; payload: { id: number; source: CartItemSource } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; source: CartItemSource; quantity: number } }
  | { type: 'CLEAR_CART' }
  | { type: 'LOAD_CART'; payload: CartItem[] };
