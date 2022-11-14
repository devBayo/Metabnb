import './Nfts.css';
import rating from '../../assets/star.png';

const Nft = props => {
  return (
    <div className="nft">
      <img src={props.nft} alt="Nft" className="nft-img" />
      <div className="nft-textbox">
        <div className="nft-desc">
          <p>Desert king</p>
          <h4>1MBT per night</h4>
        </div>

        <div className="nft-desc">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>

        <div className="nft-ratings">
          <img src={rating} alt="rating-star" />
          <img src={rating} alt="rating-star" />
          <img src={rating} alt="rating-star" />
          <img src={rating} alt="rating-star" />
          <img src={rating} alt="rating-star" />
        </div>
      </div>
    </div>
  );
};

const Nfts = props => {
  return (
    <div className="nfts">
      {props.nfts.map(nft => (
        <Nft nft={nft} />
      ))}
    </div>
  );
};

export default Nfts;
