// Product.js
import React from 'react';

function Product({title ,price}) {
  return (
    <div className='Product'>
      <h2>{title}</h2>
      <p>Price : {price}</p>
    </div>
  );
}

export default Product;
