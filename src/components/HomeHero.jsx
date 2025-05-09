import { useState, useEffect } from 'react';

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Hero images - would use high-end Gucci-style campaign images
  const heroImages = [
    'https://images.pexels.com/photos/1082529/pexels-photo-1082529.jpeg',
    'https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg'
  ];

  // Luxury products data
  const products = [
    {
      id: 1,
      name: 'GG Marmont Matelassé Bag',
      category: 'Handbags',
      image: 'https://images.pexels.com/photos/265924/pexels-photo-265924.jpeg',
      price: 2580,
      originalPrice: 2980,
      isNew: true
    },
    {
      id: 2,
      name: 'G-Timeless Watch',
      category: 'Watches',
      image: 'https://images.pexels.com/photos/349609/pexels-photo-349609.jpeg',
      price: 1350,
      originalPrice: 1500
    },
    {
      id: 3,
      name: 'Interlocking G Sunglasses',
      category: 'Eyewear',
      image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg',
      price: 620,
      colors: [
        { name: "Black", value: "#000000", selected: true },
        { name: "Tortoise", value: "#964B00" }
      ]
    }
  ];

  // Auto-slider effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Slower transition for luxury feel
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-serif">
      {/* Hero Section - Minimalist Luxury */}
      <div className="relative h-screen w-full">
        {/* Hero Image */}
        <img
          src={heroImages[currentIndex]}
          alt="Luxury Campaign"
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-light tracking-tight mb-4">
              HAYYA COLLECTION
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light tracking-widest mb-8">
              SPRING SUMMER 2023
            </p>
            <button className="border border-white text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
              DISCOVER
            </button>
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight mb-2">NEW ARRIVALS</h2>
            <p className="text-gray-600 text-sm tracking-widest">FEATURED COLLECTION</p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition duration-500 group-hover:opacity-90"
                  />
                  
                  {/* New Badge */}
                  {product.isNew && (
                    <div className="absolute top-4 left-4 bg-black text-white px-3 py-1 text-xs tracking-widest">
                      NEW
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-light">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-2">{product.category}</p>
                  <div className="flex justify-center items-center space-x-2">
                    <span className="font-light">${product.price.toLocaleString()}</span>
                    {product.originalPrice && (
                      <span className="text-gray-400 text-sm line-through">
                        ${product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-16">
            <button className="border border-black text-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition duration-300">
              VIEW ALL PRODUCTS
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light tracking-tight mb-6">HOUSE OF HAYYA</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Since 1921, Gucci has represented the pinnacle of Italian craftsmanship. Our collections blend contemporary vision with heritage design codes.
            </p>
            <button className="border border-black text-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition duration-300">
              OUR HERITAGE
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;