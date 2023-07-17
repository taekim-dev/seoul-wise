import React from 'react';

const CategoryHeader = ({ categoryName }) => {
  return (
    <header>
      <h1>Top 10 in {categoryName}</h1>
    </header>
  );
};

export default CategoryHeader;
