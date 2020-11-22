import React from 'react';
import Product from './components/Product';
import TextBox from './components/TextBox';

const listOfProducts = [
  { id: 1, label: 'Plant', price: 10, checked: true },
  { id: 2, label: 'PS 5', price: 500, checked: false },
  { id: 3, label: 'Plant 1', price: 50, checked: true },
  { id: 4, label: 'Plant 2', price: 70, checked: false },
  { id: 5, label: 'Plant 3', price: 47, checked: false },
  { id: 6, label: 'Plant 4', price: 89, checked: false },
];

function App() {
  return (
    <div>
      <TextBox placeholder="Product Name" />
      <TextBox placeholder="Product Price" />
      <h3>Unpacked items</h3>
      {listOfProducts.map(
        (product) =>
          !product.checked && (
            <Product
              checked={product.checked}
              id={product.id}
              label={product.label}
              price={product.price}
            />
          ),
      )}

      <h3>Packed items</h3>
      {listOfProducts.map(
        (product) =>
          product.checked && (
            <Product
              checked={product.checked}
              id={product.id}
              label={product.label}
              price={product.price}
            />
          ),
      )}
    </div>
  );
}

export default App;
