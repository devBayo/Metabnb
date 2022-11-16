import './PlacesNav.css';

// prettier-ignore
const places = ['Restaurant','Cottage','Castle',
'Fantastic City','Beach','Carbins','Off-grid',
'Farm',
];

const PlacesNav = () => {
  return (
    <nav className="container nav nav-places">
      <ul className="nav-links nav-links__places">
        {places.map((place, i) => (
          <li key={i} className="nav-item">
            <a href="/#" className="nav-link">
              {place}
            </a>
          </li>
        ))}

        <li className="nav-item">
          <button className="btn btn-place">
            Location
            <ion-icon name="options-sharp"></ion-icon>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default PlacesNav;
