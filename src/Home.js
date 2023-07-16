import React from 'react';
import Header from './Header';
import CategoryGrid from './CategoryGrid';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <CategoryGrid />
      <Footer />
    </div>
  );
};

export default Home;
