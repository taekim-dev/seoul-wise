import React from 'react';

const CategoryButton = ({ title }) => {
  return (
    <div className="bg-white text-gray-800 border-gray-300 border-2 shadow-lg py-6 px-4 rounded-lg m-4 w-60 h-60 flex flex-col justify-center items-center text-center cursor-pointer">
      <img src={`images/${title}.jpg`} alt={`${title} icon`} className="h-24 w-24 object-contain mb-4"/>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default CategoryButton;
