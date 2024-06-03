import { useContext } from "react";
import DestinationCard from "../destination-card/DestinationCard";
import "./Carousel.css";
import PropTypes from "prop-types";
import { DestinationContext } from "../../App";
import { Link } from "react-router-dom";

function Carousel() {
  const { destinations } = useContext(DestinationContext);
  const trendingDestinations = destinations.filter(({ trending }) => trending);

  return (
    <>
      <header className="trending-destinations">
        <h1> Trending destinations</h1>
      </header>
      <ul className="trending">
        {trendingDestinations.map((destination) => (
          <li key={destination.id} className="trending-item">
            <Link to={`/destination/${destination.id}`}>
              <DestinationCard destinationElement={destination} large={true} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Carousel;

Carousel.propTypes = {
  destinations: PropTypes.array,
};
