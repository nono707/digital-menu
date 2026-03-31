function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="text-end mb-4">
      <button className="btn theme-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <>
            <i className="bi bi-sun-fill me-2"></i>Day Dining
          </>
        ) : (
          <>
            <i className="bi bi-moon-stars-fill me-2"></i>Evening Dining
          </>
        )}
      </button>
    </div>
  );
}

export default ThemeToggle;