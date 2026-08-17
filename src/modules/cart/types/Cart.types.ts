export type PaymentMethod = {
  id: string;
  label: string;
  description: string;
};

export type CartProductItemProps = {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  quantity: number;
  source: 'model' | 'product';
  onUpdateQuantity: (quantity: number) => void;
  onRemove: () => void;
};

export type CartProductListProps = {
  emptyMessage?: string;
};

export type CartPaymentProps = {
  subtotal: number;
  onCheckout: () => void;
};

export type OrderSummaryProps = {
  subtotal: number;
};
