import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Product } from '../types/product';

const ProductItem: React.FC<Product> = ({
  num,
  name,
  count,
  year,
  shape,
  color,
  size,
  favorite,
  image,
}) => {
  console.log(num, count, year, shape, color, size, favorite);

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={require('../assets/images/goods/' + image + '.jpg')}
      />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
