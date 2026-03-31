import MenuCard from './MenuCard';

function MenuList({ items, addToCart, openModal }) {
  return (
    <div className="row">
      {items.length > 0 ? (
        items.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
            addToCart={addToCart}
            openModal={openModal}
          />
        ))
      ) : (
        <div className="empty-state text-center py-5">
          <i className="bi bi-emoji-frown fs-1 mb-3 d-block"></i>
          <h4>No menu items found</h4>
          <p className="text-muted">
            Try another category or search for something delicious.
          </p>
        </div>
      )}
    </div>
  );
}

export default MenuList;