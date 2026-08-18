import { productsData } from '../../home-page/mocks/productsData';
import type { ProductDetail } from '../types/ProductDetails.types';

import d11005068_FRONT from '../img/products-details-img/11005068_FRONT.avif';
import d11005068_SIDE from '../img/products-details-img/11005068_SIDE.avif';
import d11005068_SIDE_DETAIL from '../img/products-details-img/11005068_SIDE_DETAIL.avif';
import d11005068_D_45 from '../img/products-details-img/11005068_D_45.avif';
import d11005068_D_45_DETAIL from '../img/products-details-img/11005068_D_45_DETAIL.avif';

import d11004343_FRONT from '../img/products-details-img/11004343_FRONT.avif';
import d11004343_SIDE from '../img/products-details-img/11004343_SIDE.avif';
import d11004343_SIDE_DETAIL from '../img/products-details-img/11004343_SIDE_DETAIL.avif';
import d11004343_D_45 from '../img/products-details-img/11004343_D_45.avif';
import d11004343_D_45_DETAIL from '../img/products-details-img/11004343_D_45_DETAIL.avif';

import d11004768_FRONT from '../img/products-details-img/11004768_FRONT.avif';
import d11004768_SIDE from '../img/products-details-img/11004768_SIDE.avif';
import d11004768_SIDE_DETAIL from '../img/products-details-img/11004768_SIDE_DETAIL.avif';
import d11004768_D_45 from '../img/products-details-img/11004768_D_45.avif';
import d11004768_D_45_DETAIL from '../img/products-details-img/11004768_D_45_DETAIL.avif';

import d11004956_FRONT from '../img/products-details-img/11004956_FRONT.avif';
import d11004956_SIDE from '../img/products-details-img/11004956_SIDE.avif';
import d11004956_SIDE_DETAIL from '../img/products-details-img/11004956_SIDE_DETAIL.avif';
import d11004956_D_45 from '../img/products-details-img/11004956_D_45.avif';
import d11004956_D_45_DETAIL from '../img/products-details-img/11004956_D_45_DETAIL.avif';

import d11005065_FRONT from '../img/products-details-img/11005065_FRONT.avif';
import d11005065_SIDE from '../img/products-details-img/11005065_SIDE.avif';
import d11005065_SIDE_DETAIL from '../img/products-details-img/11005065_SIDE_DETAIL.avif';
import d11005065_D_45 from '../img/products-details-img/11005065_D_45.avif';
import d11005065_D_45_DETAIL from '../img/products-details-img/11005065_D_45_DETAIL.avif';

import d11005159_FRONT from '../img/products-details-img/11005159_FRONT.avif';
import d11005159_SIDE from '../img/products-details-img/11005159_SIDE.avif';
import d11005159_SIDE_DETAIL from '../img/products-details-img/11005159_SIDE_DETAIL.avif';
import d11005159_D_45 from '../img/products-details-img/11005159_D_45.avif';
import d11005159_D_45_DETAIL from '../img/products-details-img/11005159_D_45_DETAIL.avif';
import d11005159_NORMAL_1 from '../img/products-details-img/11005159_NORMAL_1.avif';
import d11005159_VIDEO from '../img/products-details-img/11005159_AFTER_LOOK_BOOK_FIRST_1.mp4';

const productCodeToDetails: Record<number, string[]> = {
  1: [d11005068_FRONT, d11005068_SIDE, d11005068_SIDE_DETAIL, d11005068_D_45, d11005068_D_45_DETAIL],
  2: [d11004343_FRONT, d11004343_SIDE, d11004343_SIDE_DETAIL, d11004343_D_45, d11004343_D_45_DETAIL],
  3: [d11004768_FRONT, d11004768_SIDE, d11004768_SIDE_DETAIL, d11004768_D_45, d11004768_D_45_DETAIL],
  4: [d11004956_FRONT, d11004956_SIDE, d11004956_SIDE_DETAIL, d11004956_D_45, d11004956_D_45_DETAIL],
  5: [d11005065_FRONT, d11005065_SIDE, d11005065_SIDE_DETAIL, d11005065_D_45, d11005065_D_45_DETAIL],
  6: [d11005159_FRONT, d11005159_VIDEO, d11005159_SIDE, d11005159_SIDE_DETAIL, d11005159_D_45, d11005159_D_45_DETAIL, d11005159_NORMAL_1],
};

const productDetails: ProductDetail[] = productsData.map((product) => ({
  id: `product-${product.id}`,
  name: product.productName,
  price: product.price,
  imageSrc: product.imageSrc,
  description: `The ${product.productName} is the perfect combination of elegance and functionality. With contemporary design and refined finish, this frame stands out for the quality of its materials and the comfort of daily use.`,
  specs: [
    { label: 'Material', value: 'Metal + Acetate' },
    { label: 'Lens', value: 'Anti-reflective with UV400 protection' },
    { label: 'Weight', value: '28g' },
    { label: 'Lens width', value: '54mm' },
    { label: 'Bridge', value: '16mm' },
    { label: 'Temple', value: '135mm' },
  ],
  images: productCodeToDetails[product.id] || [product.imageSrc, product.imageSrc, product.imageSrc],
}));

export const allProductDetails: ProductDetail[] = [...productDetails];

export function getProductDetailById(id: string): ProductDetail | undefined {
  return allProductDetails.find((p) => p.id === id);
}
