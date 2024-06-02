
import "./Recommended.css";
import DestinationCard from "../destination-card/DestinationCard";

import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { DestinationContext } from "../../App";




function Recommended({ searchTerm }) {
  const { destinations }= useContext(DestinationContext)

  const filteredDestinations = destinations.filter(({ title }) =>
    title.toUpperCase().includes(searchTerm.toUpperCase())
  );

  const destinationsNotFound = filteredDestinations.length === 0;


  return (
    <section>
      <header className="header-destinations">
        <h1 className="recommended-destinations"> Recommended destinations for you</h1>
      </header>

      {destinationsNotFound ? (
        <p>No destination found!</p>
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
