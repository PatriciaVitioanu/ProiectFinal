import { destinations } from "../../data/data";
import "./Recommended.css";
import DestinationCard from "../DestinationCard";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";




function Recommended({ searchTerm, destinations }) {
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
        <p> 404 No destination found.</p>
      ) : (
        <ul className="destination-list">
          {filteredDestinations.map((destinationItem) => (
            <Link
              key={destinationItem.id}
              to={`/destination/${destinationItem.id}`}
            >
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
  destinations : PropTypes.any,
};
