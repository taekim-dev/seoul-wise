import CategoryButton from './CategoryButton';

const CategoryGrid = () => {
  const categories = [
    'Food',
    'Nature',
    'Culture',
    'History',
    'Fashion',
    'Wellness',
  ];

  return (
    <div className="flex justify-center px-4 sm:px-0">
      <div className="grid grid-cols-2 gap-2 sm:gap-4 place-items-center max-w-screen-sm">
        {categories.map((title, index) => (
          <CategoryButton key={index} title={title} />
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;
