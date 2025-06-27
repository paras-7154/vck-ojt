import { href, Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div>
      <header>
        <nav class="navbar">
          <div>
            <h3>Vivekanand College </h3>
          </div>
          <div class="right-nav">
            <Link to="/home" class="nav-item">
              Home
            </Link>
            <Link to="/about" class="nav-item">
              About
            </Link>
            <Link to="/courses" class="nav-item">
              Courses
            </Link>
            <Link to="/contact" class="nav-item">
              Contact
            </Link>

            <a class="btn" href="/Admission" data-discover="true">
              Apply
            </a>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
