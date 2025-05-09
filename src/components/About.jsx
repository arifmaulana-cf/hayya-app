import React from 'react';

const About = () => {
  return (
    <div className="font-serif bg-white">
      {/* Hero Section */}
      <section className="relative h-screen max-h-[800px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/1438761/pexels-photo-1438761.jpeg"
          alt="About Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-white text-4xl md:text-6xl font-light tracking-tight mb-4">
              HAYYA HERITAGE
            </h1>
            <p className="text-white/90 text-lg md:text-xl font-light tracking-widest">
              SINCE 1921
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative aspect-square">
              <img
                src="https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg"
                alt="Our Story"
                className="w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-black z-0"></div>
            </div>
          </div>

          {/* Text Column */}
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-light tracking-tight mb-6">OUR STORY</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Founded in Florence in 1921, Gucci represents the pinnacle of Italian craftsmanship. 
              Our vision has always been to create the finest leather goods, clothing, and accessories 
              that stand the test of time while pushing creative boundaries.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              From our iconic Bamboo Bag introduced in 1947 to today's contemporary collections, 
              we've maintained an uncompromising commitment to quality and innovation.
            </p>
            <button className="border border-black text-black px-8 py-3 text-sm tracking-widest hover:bg-black hover:text-white transition duration-300">
              EXPLORE OUR HISTORY
            </button>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="text-3xl font-light tracking-tight text-center mb-16">OUR VALUES</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="text-center px-4">
              <h3 className="text-xl font-light mb-4 tracking-tight">CRAFTSMANSHIP</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Each piece is crafted by skilled artisans using techniques perfected over generations, 
                ensuring exceptional quality in every detail.
              </p>
            </div>

            {/* Value 2 */}
            <div className="text-center px-4">
              <h3 className="text-xl font-light mb-4 tracking-tight">INNOVATION</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                We balance heritage with forward-thinking design, constantly redefining luxury 
                for contemporary audiences.
              </p>
            </div>

            {/* Value 3 */}
            <div className="text-center px-4">
              <h3 className="text-xl font-light mb-4 tracking-tight">SUSTAINABILITY</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Committed to responsible luxury, we implement sustainable practices throughout 
                our supply chain and production processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <h2 className="text-3xl font-light tracking-tight text-center mb-16">CREATIVE DIRECTORS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <div className="relative aspect-square w-64 h-64 mx-auto mb-6 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg"
                alt="Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-light tracking-tight">ALESSANDRO MICHELE</h3>
            <p className="text-gray-600 text-sm">Creative Director, 2015-2022</p>
          </div>

          {/* Team Member 2 */}
          <div className="text-center">
            <div className="relative aspect-square w-64 h-64 mx-auto mb-6 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg"
                alt="Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-light tracking-tight">SABATO DE SARNO</h3>
            <p className="text-gray-600 text-sm">Creative Director, 2023-Present</p>
          </div>

          {/* Team Member 3 */}
          <div className="text-center">
            <div className="relative aspect-square w-64 h-64 mx-auto mb-6 overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg"
                alt="Creative Director"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg font-light tracking-tight">TOM FORD</h3>
            <p className="text-gray-600 text-sm">Creative Director, 1994-2004</p>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="relative h-[500px] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/373290/pexels-photo-373290.jpeg"
          alt="Gucci Heritage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center px-4">
            <h2 className="text-white text-3xl md:text-4xl font-light tracking-tight mb-6">
              EXPLORE OUR ARCHIVES
            </h2>
            <button className="border border-white text-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition duration-300">
              VISIT THE MUSEUM
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;