function HeroSection() {
  return (
    <section className="hero-section mb-5">
      <div className="row align-items-center g-4">
        <div className="col-lg-6">
          <div className="hero-text">
            <p className="hero-tag">Bloom & Bite ✨ Signature Dining</p>

            <h1 className="hero-title">
              Where elegance meets <span>flavor</span>
            </h1>

            <p className="hero-desc">
              Explore a beautifully curated dining experience with signature main
              courses, fresh salads, handcrafted drinks, and elegant desserts —
              all designed to feel warm, modern, and unforgettable.
            </p>

            <div className="special-box mt-4">
              <p className="mb-1 special-label">Chef’s Recommendation</p>
              <h5 className="mb-1">Ocean Pearl Salmon</h5>
              <small>
                Fresh, refined, and one of our most elegant signature dishes 🍽️
              </small>
            </div>
          </div>
        </div>

        <div className="col-lg-6">
          <div className="hero-image-card">
            <img
              src={`${import.meta.env.BASE_URL}images/hero-dining.jpg`}
              alt="Bloom and Bite premium dining"
              className="img-fluid hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;