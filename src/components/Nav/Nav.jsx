import './Nav.css';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/nav-logo.svg';

const Nav = () => {
  return (
    <nav className="container nav">
      <img src={NavLogo} alt="Metabnb-Logo" className="nav-logo" />
      <ul className="nav-links">
        <li className="nav-item">
          <Link to="/#" className="nav-link">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/place-to-stay" className="nav-link">
            Place to stay
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/#" className="nav-link">
            NFTs
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/#" className="nav-link">
            Community
          </Link>
        </li>
      </ul>

      <button className="btn btn-cta">Connect wallet</button>
    </nav>
  );
};

export default Nav;
