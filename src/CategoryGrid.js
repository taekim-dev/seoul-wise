import CategoryButton from './CategoryButton';

const CategoryGrid = () => {
    const categories = [
      { title: 'Food & Dining', icon: '🍔' },
      { title: 'Nature & Outdoors', icon: '🌲' },
      { title: 'Art & Culture', icon: '🎨' },
      { title: 'History & Heritage', icon: '🏰' },
      { title: 'Shopping & Fashion', icon: '👠' },
      { title: 'Adventure & Recreation', icon: '🏄‍♂️' },
    ];
  
    return (
      <div className="flex justify-center">
        <div className="grid grid-cols-2 gap-2 place-items-center">
          {categories.map((category, index) => (
            <CategoryButton key={index} title={category.title} icon={category.icon} />
          ))}
        </div>
      </div>
    );
  };

export default CategoryGrid;
