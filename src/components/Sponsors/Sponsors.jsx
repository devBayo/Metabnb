import './Sponsors.css';
import MetaMask from '../../assets/metamask.png';
import OpenSea from '../../assets/opensea.png';
import MbToken from '../../assets/mbtoken.png';

const Sponsors = () => {
  return (
    <section className="sponsors-section">
      <div className="container sponsors">
        <img src={MbToken} alt="Mbtoken logo" />
        <img src={MetaMask} alt="metamask logo" />
        <img src={OpenSea} alt="opensea logo" />
      </div>
    </section>
  );
};

export default Sponsors;
