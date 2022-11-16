import './Nav.css';
import { Link } from 'react-router-dom';
import NavLogo from '../../assets/nav-logo.svg';

const links = [
  {
    href: '/#',
    text: 'Home',
  },
  {
    href: '/place-to-stay',
    text: 'Place to stay',
  },
  {
    href: '/#',
    text: 'NFTs',
  },
  {
    href: '/#',
    text: 'Community',
  },
];

const Nav = () => {
  return (
    <nav className="container nav">
      <img src={NavLogo} alt="Metabnb-Logo" className="nav-logo" />
      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={i} className="nav-item">
            <Link to={link.href} className="nav-link">
              {link.text}
            </Link>
          </li>
        ))}
      </ul>

      <button className="btn btn-cta">Connect wallet</button>
    </nav>
  );
};

export default Nav;
