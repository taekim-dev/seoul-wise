import React from 'react';

const CategoryPage = ({ category, items }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-bold text-2xl mb-4 text-center">Top 10 in {category}</h1>
      <ul className="grid grid-cols-1 gap-4 place-items-center w-full px-2 md:px-0">
        {items.map((item, index) => (
          <li key={index} className="mb-2 bg-white text-gray-800 shadow-lg rounded-lg w-full md:w-2/5 flex flex-col justify-center items-center text-center cursor-pointer overflow-hidden flex md:flex-row">
            <img src={`images/${item}.jpg`} alt={`${item}`} className="h-full md:w-3/5 object-cover md:mr-0"/>
            <div className="text-xl font-bold md:w-2/5 flex items-center justify-center md:ml-0">{item}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
