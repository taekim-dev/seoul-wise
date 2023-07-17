import React from 'react';

const CategoryPage = ({ category, items }) => {
  return (
    <div className="p-4">
      <h1 className="font-bold text-xl mb-4">Top 10 in {category}</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
