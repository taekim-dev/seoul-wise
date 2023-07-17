import React from 'react';

const CategoryPage = ({ category, items }) => {
  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="font-bold text-2xl mb-4 text-center">Top 10 in {category}</h1>
      <ul className="grid grid-cols-1 gap-4 place-items-center w-full px-2 md:px-0">
        {items.map((item, index) => (
          <li key={index} className="mb-2 bg-white text-gray-800 border-gray-300 border-2 shadow-lg py-6 px-4 rounded-lg m-2 w-full md:w-2/5 flex flex-col justify-center items-center text-center cursor-pointer mx-2">
            <p className="text-xl font-semibold">{item}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryPage;
