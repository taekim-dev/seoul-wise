import React from 'react';
import CategoryPage from './CategoryPage';

const Food = () => {
  const top10 = [
    'Bibimbap',
    'Tteokbokki',
    'Bulgogi',
    'Gopchang',
    'Samgyeopsal',
    'Kimchi',
    'Bulgogi',
    'Jjajangmyeon',
    'Chimaek',
    'Instant noodles',
  ];

  return (
    <CategoryPage category="Food" items={top10} />
  );
};

export default Food;