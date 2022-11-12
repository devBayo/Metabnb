import './Nav.css';
import NavLogo from '../../assets/nav-logo.svg';

const Nav = () => {
  return (
    <nav className="container nav">
      <img src={NavLogo} alt="Metabnb-Logo" className="nav-logo" />
      <ul className="nav-links">
        <li className="nav-item">
          <a href="#s" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#m" className="nav-link">
            Place to stay
          </a>
        </li>
        <li className="nav-item">
          <a href="#m" className="nav-link">
            NFTs
          </a>
        </li>
        <li className="nav-item">
          <a href="#m" className="nav-link">
            Community
          </a>
        </li>
      </ul>

      <button className="btn-cta">Connect wallet</button>
    </nav>
  );
};

export default Nav;
