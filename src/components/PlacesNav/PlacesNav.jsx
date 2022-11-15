const PlacesNav = () => {
  return (
    <nav className="container nav">
      <ul className="nav-links">
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Restaurant
          </a>
        </li>
        <li className="nav-item">
          <a href="/place-to-stay" className="nav-link">
            Cottage
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Castle
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Fantastic City
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Beach
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Cabins
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Off-grid
          </a>
        </li>
        <li className="nav-item">
          <a href="/#" className="nav-link">
            Farm
          </a>
        </li>
        {/* <li className="nav-item">
          <button>
            Location
            <span>
              <ion-icon name="options-sharp"></ion-icon>
            </span>
          </button>
        </li> */}
      </ul>
    </nav>
  );
};
export default PlacesNav;
