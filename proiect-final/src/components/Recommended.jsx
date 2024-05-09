import DestinationCard from "./DestinationCard";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import "./Recommended.css";
import { useContext } from 'react';

function Recommended({ searchTerm }) {
  const { destinations } = useContext(DestinationContext);

  const filteredDestinations = destinations.filter(({ title }) =>
    title.toUpperCase().includes(searchTerm.toUpperCase())
  );
  const destinationsNotFound = filteredDestinations.length === 0;

  return (
    <section>
      <header>
        <h1> Recommended destinations for you</h1>
      </header>

   {destinationsNotFound ? (
        <p>404 There were no destination found for the given search input.</p>
      ) : (
        <ul className="movie-list">
          {filteredDestinations.map((destinationItem) => (
            <Link key={destinationItem.id} to={`/movie/${destinationItem.id}`}>
              <DestinationCard destinationElement={destinationItem} />
            </Link>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Recommended;

Recommended.propTypes = {
  searchTerm: PropTypes.string,
  destinations: PropTypes.any,
};