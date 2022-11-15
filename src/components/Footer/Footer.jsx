import './Footer.css';
import FooterLogo from '../../assets/footer_logo.png';
import Facebook from '../../assets/facebook.svg';
import Instagram from '../../assets/instagram.svg';
import Twitter from '../../assets/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="logo-col">
          <img src={FooterLogo} alt="logo" className="footer-logo" />

          <div className="social-links">
            <a className="social-link" href="https://facebook.com/metabnb">
              <img src={Facebook} alt="facebook logo" />
            </a>

            <a className="social-link" href="https://instagram.com/metabnb">
              <img src={Instagram} alt="instagram logo" />
            </a>

            <a className="social-link" href="https://twitter.com/metabnb">
              <img src={Twitter} alt="twitter logo" />
            </a>
          </div>
        </div>

        {/* Component */}
        <nav className="nav-col">
          <h4 className="footer-title">Community</h4>
          <ul className="footer-nav">
            <li>
              <a href="/#" className="footer-link">
                NFT
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Tokens
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Landlords
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Discord
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <h4 className="footer-title">Places</h4>
          <ul className="footer-nav">
            <li>
              <a href="/#" className="footer-link">
                Castle
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Farms
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Beach
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Learn more
              </a>
            </li>
          </ul>
        </nav>
        <nav className="nav-col">
          <h4 className="footer-title">About us</h4>
          <ul className="footer-nav">
            <li>
              <a href="/#" className="footer-link">
                Road map
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Creators
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Career
              </a>
            </li>
            <li>
              <a href="/#" className="footer-link">
                Contact us
              </a>
            </li>
          </ul>
        </nav>

        <p className="copyright">
          <span>&copy;</span> 2022 Metabnb
        </p>
      </div>
    </footer>
  );
};

export default Footer;
