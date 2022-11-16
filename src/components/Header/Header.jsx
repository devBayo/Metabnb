import './Header.css';
import HeroImg from '../../assets/hero-img.png';

const Header = () => {
  return (
    <header className="container header">
      <div className="hero-text-box">
        <h1 className="heading-primary">
          Rent a <span>Place</span> away from <span>Home</span> in the{' '}
          <span>Metaverse</span>
        </h1>

        <p className="heading-text">
          we provide you access to luxury and affordable houses in the
          metaverse, get a chance to turn your imagination to reality at your
          comfort zone
        </p>

        <form>
          <input
            type="text"
            placeholder="Search for location"
            className="input-location"
          />
          <button type="submit" className="btn btn-location">
            Search
          </button>
        </form>
      </div>

      <div className="hero-img-box">
        <img src={HeroImg} alt="metabnb demo images" className="hero-img" />
      </div>
    </header>
  );
};

export default Header;
