import React from 'react';
import Product from './Product';
import slider from "../assets/slider-1.jpg"
import slider2 from "../assets/slider-2.jpg"

const ProductsGrid = () => {
  const products = [
    {
      id: 1,
      name: 'Kaos Polos Hitam',
      price: 120000,
      images: [
        slider2,
        slider, 
      ]
    },
    {
      id: 2,
      name: 'Celana Jeans Slim Fit',
      price: 250000,
      images: [
       slider2,
        'https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress'
      ]
    }
  ];

  return (
    <section id="products" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-12"></h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {products.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsGrid;