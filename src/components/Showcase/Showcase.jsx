import './Showcase.css';
import nft1 from '../../assets/nft1.png';
import nft2 from '../../assets/nft2.png';
import nft3 from '../../assets/nft3.png';
import nft4 from '../../assets/nft4.png';
import nft5 from '../../assets/nft5.png';
import nft6 from '../../assets/nft6.png';
import nft7 from '../../assets/nft7.png';
import nft8 from '../../assets/nft8.png';
import Nfts from '../Nfts/Nfts';

export const nfts = [nft1, nft2, nft3, nft4, nft5, nft6, nft7, nft8];

const Showcase = () => {
  return (
    <section className="container showcase-section">
      <h2 className="heading-secondary">Inspiration for your next adventure</h2>

      <Nfts nfts={nfts} />
    </section>
  );
};

export default Showcase;
