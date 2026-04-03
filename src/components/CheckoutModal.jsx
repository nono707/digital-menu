function CheckoutModal({
  closeModal,
  checkoutData,
  setCheckoutData,
  confirmOrder,
  cartItems,
}) {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="custom-modal-overlay checkout-overlay" onClick={closeModal}>
      <div
        className="custom-modal-card checkout-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-btn" onClick={closeModal}>
          <i className="bi bi-x-lg"></i>
        </button>

        <div className="p-4 checkout-scroll-content">
          <h2 className="fw-bold mb-2">Checkout Experience</h2>
          <p className="text-muted mb-4">
            Complete your order details before sending it to the kitchen.
          </p>

          <div className="row g-3">
            <div className="col-12">
              <label className="form-label fw-semibold">Customer Name</label>
              <input
                type="text"
                className="form-control bloom-search"
                placeholder="Enter your name"
                value={checkoutData.name}
                onChange={(e) =>
                  setCheckoutData({ ...checkoutData, name: e.target.value })
                }
              />
            </div>

            <div className="col-md-6">
              <label className="form-label fw-semibold">Dining Type</label>
              <select
                className="form-select bloom-search"
                value={checkoutData.diningType}
                onChange={(e) =>
                  setCheckoutData({
                    ...checkoutData,
                    diningType: e.target.value,
                  })
                }
              >
                <option value="Dine In">Dine In</option>
                <option value="Pickup">Pickup</option>
              </select>
            </div>

            {checkoutData.diningType === 'Dine In' && (
              <div className="col-md-6">
                <label className="form-label fw-semibold">Table Number</label>
                <input
                  type="text"
                  className="form-control bloom-search"
                  placeholder="e.g. Table 5"
                  value={checkoutData.tableNumber}
                  onChange={(e) =>
                    setCheckoutData({
                      ...checkoutData,
                      tableNumber: e.target.value,
                    })
                  }
                />
              </div>
            )}

            <div className="col-12">
              <label className="form-label fw-semibold">Payment Method</label>
              <div className="d-flex flex-wrap gap-2">
                {['Cash', 'Card on Arrival', 'Online Demo'].map((method) => (
                  <button
                    key={method}
                    type="button"
                    className={`btn payment-btn ${
                      checkoutData.paymentMethod === method
                        ? 'active-payment'
                        : ''
                    }`}
                    onClick={() =>
                      setCheckoutData({
                        ...checkoutData,
                        paymentMethod: method,
                      })
                    }
                  >
                    {method}
                  </button>
                ))}
              </div>
            </div>

            <div className="col-12">
              <label className="form-label fw-semibold">Special Notes</label>
              <textarea
                rows="3"
                className="form-control bloom-search"
                placeholder="Any extra instructions for the kitchen..."
                value={checkoutData.notes}
                onChange={(e) =>
                  setCheckoutData({ ...checkoutData, notes: e.target.value })
                }
              ></textarea>
            </div>
          </div>

          <div className="checkout-summary mt-4">
            <h5 className="fw-bold mb-3">Order Summary</h5>
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between align-items-center mb-2"
              >
                <span>
                  {item.name} × {item.quantity}
                </span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}

            <hr />
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-0 fw-bold">Total</h5>
              <h5 className="mb-0 fw-bold">${total.toFixed(2)}</h5>
            </div>
          </div>

          <button className="btn kitchen-btn w-100 mt-4" onClick={confirmOrder}>
            <i className="bi bi-send-check me-2"></i>
            Confirm & Send to Kitchen
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutModal;