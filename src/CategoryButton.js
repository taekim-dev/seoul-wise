const CategoryButton = ({ title, icon }) => {
    return (
      <div className="bg-white text-gray-800 border-gray-300 border-2 shadow-lg py-4 px-2 rounded-lg m-2 w-full sm:w-60 h-48 sm:h-60 flex flex-col justify-center items-center text-center cursor-pointer">
        <div className="mb-2">
          {/* Placeholder for icon */}
          <span className="text-5xl">{icon}</span>
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    );
  };
  
  export default CategoryButton;
  