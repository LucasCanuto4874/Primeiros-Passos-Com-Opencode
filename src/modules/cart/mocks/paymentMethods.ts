import type { PaymentMethod } from '../types/Cart.types';

export const paymentMethods: PaymentMethod[] = [
  {
    id: 'credit-card',
    label: 'Credit Card',
    description: 'Pay in up to 12 installments interest-free',
  },
  {
    id: 'boleto',
    label: 'Bank Slip',
    description: '5% discount on payment in full',
  },
  {
    id: 'pix',
    label: 'PIX',
    description: '10% discount on payment in full',
  },
];
