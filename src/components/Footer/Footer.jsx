import { Link } from 'react-router-dom';
import './Footer.css';
import FooterLogo from '../../assets/footer_logo.png';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';

const links = [
  { title: 'Community', links: ['NFT', 'Tokens', 'Landlords', 'Discord'] },
  {
    title: 'Places',
    links: ['Castle', 'Farms', 'Beach', 'Learn more'],
  },
  {
    title: 'About us',
    links: ['Road map', 'Creators', 'Career', 'Contact us'],
  },
];

const FooterNav = props => {
  return (
    <nav className="nav-col">
      <h4 className="footer-title">{props.title}</h4>
      <ul className="footer-nav">
        {props.links.map((link, i) => (
          <li key={i}>
            <Link to="#" className="footer-link">
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="logo-col">
          <img src={FooterLogo} alt="logo" className="footer-logo" />

          <div className="social-links">
            <a
              target="blank"
              className="social-link"
              href="https://facebook.com/metabnb"
            >
              <img src={Facebook} alt="facebook logo" />
            </a>

            <a
              target="blank"
              className="social-link"
              href="https://instagram.com/metabnb"
            >
              <img src={Instagram} alt="instagram logo" />
            </a>

            <a
              target="blank"
              className="social-link"
              href="https://twitter.com/metabnb"
            >
              <img src={Twitter} alt="twitter logo" />
            </a>
          </div>
        </div>

        {links.map((link, i) => (
          <FooterNav key={i} title={link.title} links={link.links} />
        ))}

        <p className="copyright">
          <span>&copy;</span> 2022 Metabnb
        </p>
      </div>
    </footer>
  );
};

export default Footer;
