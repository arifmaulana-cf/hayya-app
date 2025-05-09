import React, { useState } from 'react';

const Product = ({ product }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  return (
    <>
      {/* Product Card - Gucci Style */}
      <div 
        className="bg-white rounded-none overflow-hidden group cursor-pointer relative"
        onClick={() => setIsModalOpen(true)}
      >
        {/* Slider Container */}
        <div className="relative aspect-square overflow-hidden">
          {/* Main Image */}
          <img
            src={product.images[currentIndex]}
            alt={`${product.name} - ${currentIndex + 1}`}
            className="w-full h-full object-cover transition-opacity duration-500"
          />

          {/* Navigation Arrows - Only appear on hover */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center focus:outline-none hover:bg-black/50 transition backdrop-blur-sm"
              aria-label="Previous image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="w-10 h-10 rounded-full bg-black/30 text-white flex items-center justify-center focus:outline-none hover:bg-black/50 transition backdrop-blur-sm"
              aria-label="Next image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Product Badge - Like Gucci's "New" or "Exclusive" tags */}
          {product.isNew && (
            <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs tracking-widest">
              NEW
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="p-4 text-center">
          <h3 className="font-serif text-lg mb-1 tracking-tight">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{product.category}</p>
          <p className="font-serif font-normal">${product.price.toLocaleString()}</p>
        </div>
      </div>

      {/* Product Modal - Luxury Style */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative bg-white max-w-6xl w-full max-h-[90vh] overflow-auto shadow-none"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - Minimalist */}
            <button 
              className="absolute top-6 right-6 text-2xl text-black hover:text-gray-600 transition z-10"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close modal"
            >
              &times;
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image Gallery Section */}
              <div className="relative bg-gray-50">
                <div className="sticky top-0 aspect-square">
                  {/* Main Image */}
                  <img
                    src={product.images[currentIndex]}
                    alt={`${product.name} - ${currentIndex + 1}`}
                    className="w-full h-full object-contain mx-auto"
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      prevImage();
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-black flex items-center justify-center hover:bg-white transition shadow-md"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      nextImage();
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 text-black flex items-center justify-center hover:bg-white transition shadow-md"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  {/* Thumbnail Indicators */}
                  <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.stopPropagation();
                          setCurrentIndex(index);
                        }}
                        className={`w-2 h-2 rounded-full transition-all ${
                          currentIndex === index ? 'bg-black w-4' : 'bg-gray-400'
                        }`}
                        aria-label={`View image ${index + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>

                {/* Thumbnail Strip - Horizontal */}
                <div className="p-4 flex space-x-2 overflow-x-auto">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(index);
                      }}
                      className={`flex-shrink-0 w-16 h-16 border ${
                        currentIndex === index ? 'border-black' : 'border-transparent'
                      }`}
                    >
                      <img 
                        src={img} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details Section */}
              <div className="p-8">
                <h2 className="font-serif text-2xl mb-2">{product.name}</h2>
                <p className="text-gray-600 text-sm mb-6">{product.category}</p>
                
                <div className="mb-8">
                  <span className="font-serif text-xl">${product.price.toLocaleString()}</span>
                  {product.originalPrice && (
                    <span className="text-gray-400 line-through ml-2">${product.originalPrice.toLocaleString()}</span>
                  )}
                </div>

                {/* Color Selection */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">COLOR</h3>
                  <div className="flex space-x-2">
                    {product.colors?.map((color, index) => (
                      <button 
                        key={index}
                        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
                        style={{ backgroundColor: color.value }}
                        aria-label={color.name}
                      >
                        {color.selected && (
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="mb-8">
                  <h3 className="text-sm font-medium mb-3">SIZE</h3>
                  <div className="grid grid-cols-5 gap-2">
                    {product.sizes?.map((size, index) => (
                      <button
                        key={index}
                        className={`py-2 border text-sm ${
                          size.available 
                            ? size.selected 
                              ? 'border-black bg-black text-white' 
                              : 'border-gray-200 hover:border-gray-400'
                            : 'border-gray-100 text-gray-400 cursor-not-allowed'
                        }`}
                        disabled={!size.available}
                      >
                        {size.value}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full py-3 bg-black text-white hover:bg-gray-800 transition mb-4">
                  ADD TO BAG
                </button>

                {/* Secondary Button */}
                <button className="w-full py-3 border border-black text-black hover:bg-gray-100 transition">
                  ADD TO WISHLIST
                </button>

                {/* Product Description */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-medium mb-3">DESCRIPTION</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{product.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Product;