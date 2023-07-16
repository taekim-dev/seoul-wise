import React from 'react';

const CategoryButton = ({ title }) => {
  return (
    <div style={{aspectRatio: "1"}} className="bg-white text-gray-800 border-gray-300 border-2 shadow-lg py-4 px-2 rounded-lg m-2 w-11/12 sm:w-60 flex flex-col justify-center items-center text-center cursor-pointer">
      <img src={`images/${title}.jpg`} alt={`${title} icon`} className="h-24 w-24 object-contain mb-4"/>
      <p className="text-lg font-semibold">{title}</p>
    </div>
  );
};

export default CategoryButton;
