function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="d-flex flex-wrap gap-2 justify-content-center my-4">
      {categories.map((category, index) => (
        <button
          key={index}
          className={`btn category-btn ${
            selectedCategory === category ? 'active-category' : ''
          }`}
          onClick={() => onSelectCategory(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;