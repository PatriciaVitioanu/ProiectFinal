import { destinations } from "./data";
import "./Recommended.css";
import DestinationCard from "./DestinationCard";

function Recommended() {
  return (
    <section>
      <header>
        <h1> Recommended destinations for you</h1>
      </header>
      <ul className="destination-list">
        {destinations.map((destinationItem) => (
      <DestinationCard destinationElement={destinationItem} key={destinationItem.id}/>
        ))}
      </ul>
    </section>
  );
}

export default Recommended;
