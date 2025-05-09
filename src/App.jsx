import React from 'react';
import Header from './components/Header';
import ProductsGrid from './components/ProductGrid'; // Pastikan nama file sesuai (perhatikan huruf besar/kecil)
import Footer from './components/Footer';
import About from './components/About';
import HomeHero from './components/HomeHero';


function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <HomeHero />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ProductsGrid />
      </main>
      <About/>
      <Footer />
    </div>
  );
}

export default App;