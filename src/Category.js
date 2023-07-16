import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
  const { categoryName } = useParams();

  return (
    <div>
      <h1>Top 10 in {categoryName}</h1>
    </div>
  );
};

export default Category;
