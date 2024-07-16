// ProductTab.js
import React from 'react';
import Product from './Product';  

function ProductTab() {
  return (
    <div className="ProductTab">
      <Product title="Phone" price={3400}/>
      <Product title="Product 2" price={3500}/>
      <Product title="Laptop" price={34000}/>
    </div>
  );
}

export default ProductTab;
