import { trendingDestinations } from "../data/data";
import DestinationCard from "./DestinationCard";

import "./Carousel.css";

function Carousel() {
  return (
    <ul className="trending">
      {trendingDestinations.map((destination) => (
        <DestinationCard
          key={destination.id}
          destinationElement={destination}
          large={true}
        ></DestinationCard>
      ))}
    </ul>
  );
}

export default Carousel;
