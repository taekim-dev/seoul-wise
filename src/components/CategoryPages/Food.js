import React from 'react';
import CategoryPage from './CategoryPage';

const Food = () => {
  const top10 = [
    'Bibimbap',
    'Kimchi',
    'Bulgogi',
    // add more food items...
  ];

  return (
    <CategoryPage category="Food" items={top10} />
  );
};

export default Food;