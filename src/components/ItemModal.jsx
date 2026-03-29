function ItemModal({ item, closeModal, addToCart }) {
  return (
    <div className="custom-modal-overlay" onClick={closeModal}>
      <div className="custom-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </button>

        <img src={item.image} alt={item.name} className="modal-img" />

        <div className="p-4">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
              <span className="badge bloom-badge-static mb-2">{item.badge}</span>
              <h3 className="fw-bold">{item.name}</h3>
              <p className="text-muted mb-1">{item.category} • {item.tag}</p>
            </div>
            <span className="price-tag">${item.price.toFixed(2)}</span>
          </div>

          <p className="modal-description">{item.description}</p>

          <div className="d-flex gap-3 flex-wrap mb-4">
            <span className="info-chip">
              <i className="bi bi-star-fill me-2"></i>{item.rating} Rating
            </span>
            <span className="info-chip">
              <i className="bi bi-flower1 me-2"></i>Bloom Signature
            </span>
            <span className="info-chip">
              <i className="bi bi-heart me-2"></i>Freshly Prepared
            </span>
          </div>

          <button className="btn add-btn w-100" onClick={() => addToCart(item)}>
            <i className="bi bi-bag-plus me-2"></i>Add to Order
          </button>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;