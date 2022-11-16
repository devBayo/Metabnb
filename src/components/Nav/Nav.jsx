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

const Nav = props => {
  return (
    <nav className={`container nav ${props.navIsOpen ? 'nav-open' : ''}`}>
      <img src={NavLogo} alt="Metabnb-Logo" className="nav-logo" />
      <ul className="nav-links">
        {links.map((link, i) => (
          <li key={i} className="nav-item">
            <Link onClick={props.toggleNav} to={link.href} className="nav-link">
              {link.text}
            </Link>
          </li>
        ))}

        <button onClick={props.onClick} className="btn btn-cta btn-cta__alt">
          Connect wallet
        </button>
      </ul>

      <button onClick={props.onClick} className="btn btn-cta btn-cta__main">
        Connect wallet
      </button>
      <button onClick={props.toggleNav} className="btn-mobile-nav">
        {!props.navIsOpen && <ion-icon name="menu-outline"></ion-icon>}
        {props.navIsOpen && <ion-icon name="close-outline"></ion-icon>}
      </button>
    </nav>
  );
};

export default Nav;
