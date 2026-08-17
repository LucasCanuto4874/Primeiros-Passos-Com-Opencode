export type ProductSpec = {
  label: string;
  value: string;
};

export type ProductDetail = {
  id: string;
  name: string;
  price: number;
  imageSrc: string;
  description: string;
  specs: ProductSpec[];
  images: string[];
};

export type ProductImageCarouselProps = {
  images: string[];
  alt: string;
};

export type ProductInfoProps = {
  name: string;
  price: number;
  description: string;
  specs: ProductSpec[];
  onAddToCart: (quantity: number) => void;
};

export type QuantitySelectorProps = {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
};
