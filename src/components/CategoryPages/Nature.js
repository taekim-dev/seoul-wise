import React from 'react';
import CategoryPage from './CategoryPage';

const Nature = () => {
    const top10 = [
      'nature1',
      'Kimchi',
      'Bulgogi',
      // add more food items...
    ];
  
    return (
      <CategoryPage category="Nature" items={top10} />
    );
  };
  
  export default Nature;