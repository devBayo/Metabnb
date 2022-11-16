import './Nfts.css';
import rating from '../../assets/star.svg';

const Nft = props => {
  return (
    <div className="nft">
      <img src={props.nft} alt="Nft" className="nft-img" />
      <div className="nft-textbox">
        <div className="nft-desc">
          <p>
            <ion-icon name="location-sharp"></ion-icon> Desert king
          </p>
          <p>
            <ion-icon name="card-sharp"></ion-icon> 1MBT per night
          </p>
          <p className="nft-distance">
            <ion-icon name="locate-sharp"></ion-icon> 2345km away
          </p>
          <p className="nft-duration">
            <ion-icon name="time-sharp"></ion-icon> Available for 2weeks stay
          </p>
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
      {props.nfts.map((nft, i) => (
        <Nft key={i} nft={nft} />
      ))}
    </div>
  );
};

export default Nfts;
