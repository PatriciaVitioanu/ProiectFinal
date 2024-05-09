import { destinations } from "../../data/data";
import "./Recommended.css";
import DestinationCard from "../DestinationCard";

function Recommended({ searchTerm }) {
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
            <DestinationCard
              destinationElement={destinationItem}
              key={destinationItem.id}
            />
          ))}
        </ul>
      )}
    </section>
  );
}

export default Recommended;
