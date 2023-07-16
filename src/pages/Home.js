import React from 'react';
import Header from '../components/Header';
import CategoryGrid from '../components/CategoryGrid';
import Footer from '../components/Footer';

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
