function MenuCard({ item, addToCart, openModal }) {
  return (
    <div className="col-md-6 mb-4">
      <div className="card border-0 shadow-sm h-100 bloom-card">
        <div className="position-relative">
          <img src={item.image} className="card-img-top menu-img" alt={item.name} />
          <span className="badge bloom-badge">{item.badge}</span>
        </div>

        <div className="card-body d-flex flex-column">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <h5 className="card-title fw-bold mb-1">{item.name}</h5>
              <small className="text-muted">{item.category} • {item.tag}</small>
            </div>
            <span className="price-tag">${item.price.toFixed(2)}</span>
          </div>

          <p className="card-text text-muted flex-grow-1">{item.description}</p>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <div className="rating-stars">
              <i className="bi bi-star-fill"></i> {item.rating}
            </div>
            <small className="prep-time">
              <i className="bi bi-clock me-1"></i>Freshly made
            </small>
          </div>

          <div className="d-flex gap-2 mt-3">
            <button className="btn details-btn flex-fill" onClick={() => openModal(item)}>
              <i className="bi bi-eye me-1"></i> View
            </button>

            <button className="btn add-btn flex-fill" onClick={() => addToCart(item)}>
              <i className="bi bi-plus-circle me-1"></i> Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;