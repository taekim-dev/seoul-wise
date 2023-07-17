import React from 'react';
import { Link } from 'react-router-dom';

const CategoryButton = ({ title }) => {
  return (
    <div className="bg-white text-gray-800 border-gray-300 border-2 shadow-lg py-6 px-4 rounded-lg m-2 sm:w-60 sm:h-60 w-full h-full flex flex-col justify-center items-center text-center cursor-pointer mx-2">
      <Link to={`/${title.toLowerCase()}`} className="h-full w-full flex flex-col justify-center items-center text-center">
        <img src={`images/${title}.jpg`} alt={`${title} icon`} className="h-24 w-24 object-contain mb-4"/>
        <p className="text-xl font-semibold">{title}</p>
      </Link>
    </div>
  );
};

export default CategoryButton;
