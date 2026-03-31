function NavbarMenu({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg bloom-navbar shadow-sm">
      <div className="container">
        <a className="navbar-brand fw-bold bloom-brand" href="#">
          🌸 Bloom & Bite
        </a>

        <div className="ms-auto cart-pill">
          <i className="bi bi-bag-heart-fill me-2"></i>
          {cartCount} item{cartCount !== 1 ? 's' : ''} selected
        </div>
      </div>
    </nav>
  );
}

export default NavbarMenu;