import PropTypes from "prop-types";

import "./DestinationCard.css";

function DestinationCard({ destinationElement, large = false }) {
  const { id, imageUrl, year, season, continent, title } = destinationElement;

  return (
    <li
      className={`destination ${
        large ? "destination--large" : "destination--small"
      }`}
      key={id}
    >
      <img className="destination__image" src={imageUrl} />
      <div className="destination__bookmark">
        <i className="destination__bookmark-icon"></i>
      </div>

      <div className="destination__info">
        <div>
          <span className="destination__year">{year}</span>
          <span className="destination__season">{season}</span>
          <span className="destination__continent">{continent}</span>
        </div>

        <h3 className="destination__title">{title}</h3>
      </div>
    </li>
  );
}

export default DestinationCard;

DestinationCard.propTypes = {
  large: PropTypes.bool,
  destinationElement: PropTypes.shape({
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.number,
    season: PropTypes.string,
    continent: PropTypes.string,
    title: PropTypes.string,
  }),
};
