import "./Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">

        <div className="logo">
  <span className="logo-ai">AI</span>
  <span className="logo-text">for Us</span>
</div>

        <nav className="nav-links">
          <a href="#how">How it Works</a>
          <a href="#privacy">Privacy</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="start-btn">
          Start Free
        </button>

      </div>
    </header>
  );
}

export default Navbar;