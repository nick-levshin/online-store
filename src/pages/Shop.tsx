import React from 'react';
import ProductItem from '../components/ProductItem';
import data from '../data/goods';
import { Product } from '../types/product';

const Shop: React.FC = () => {
  return (
    <div style={{ minHeight: 'calc(100vh - 70px - 105px)' }}>
      {data.map(
        ({
          num,
          name,
          count,
          year,
          shape,
          color,
          size,
          favorite,
          image,
        }: Product) => (
          <ProductItem
            key={num}
            num={num}
            name={name}
            count={count}
            year={year}
            shape={shape}
            color={color}
            size={size}
            favorite={favorite}
            image={image}
          />
        )
      )}
    </div>
  );
};

export default Shop;
