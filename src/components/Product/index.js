import { bool, number, string } from 'prop-types';
import React from 'react';

const Product = ({ checked, label, price, id }) => {
  return (
    <div>
      <input checked={checked} type="checkbox" />
      {label} - <strong>{price}$</strong>
    </div>
  );
};

Product.defaultProps = {
  id: null,
  label: '',
  price: null,
  checked: false,
};

Product.propTypes = {
  id: number,
  label: string,
  price: number,
  checked: bool,
};

export default Product;
