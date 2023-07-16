const CategoryButton = ({ title, icon }) => {
    return (
      <div className="bg-white text-gray-800 border-gray-300 border-2 shadow-lg py-6 px-4 rounded-lg m-4 w-60 h-60 flex flex-col justify-center items-center text-center cursor-pointer">
        <div className="mb-4">
          {/* Placeholder for icon */}
          <span className="text-6xl">{icon}</span>
        </div>
        <p className="text-lg font-semibold">{title}</p>
      </div>
    );
  };
  
  export default CategoryButton;