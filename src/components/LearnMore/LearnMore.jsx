import './LearnMore.css';
import Frame from '../../assets/frame.png';

const LearnMore = () => {
  return (
    <section className="learn-more-section">
      <div className="container learn-more-container">
        <div className="text-box">
          <h2 className="heading-secondary">Metabnb NFTs</h2>
          <p className="text-desc">
            Discover our NFT gift cards collection. Loyal customers gets amazing
            gift cards which are traded as NFTs. These NFTs gives our cutomer
            access to loads of our exclusive services.
          </p>
          <button className="btn btn-learn-more">Learn more</button>
        </div>
        <img
          src={Frame}
          className="learn-more-img"
          alt="Three visually appealing nfts"
        />
      </div>
    </section>
  );
};

export default LearnMore;
