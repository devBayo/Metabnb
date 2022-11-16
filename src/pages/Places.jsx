import './Places.css';
import PlacesNav from '../components/PlacesNav/PlacesNav';
import { nfts } from '../components/Showcase/Showcase';
import nft9 from '../assets/nft9.png';
import nft10 from '../assets/nft10.png';
import nft11 from '../assets/nft11.png';
import nft12 from '../assets/nft12.png';
import nft13 from '../assets/nft13.png';
import nft14 from '../assets/nft14.png';
import nft15 from '../assets/nft15.png';
import nft16 from '../assets/nft16.png';
import Nfts from '../components/Nfts/Nfts';

// prettier-ignore
const allNfts = [...nfts, nft9, nft10, nft11, nft12, nft13, nft14, nft15, nft16];

const Places = () => {
  return (
    <main className="container">
      <PlacesNav />
      <section className="places-section">
        <Nfts nfts={allNfts} />
      </section>
    </main>
  );
};

export default Places;
