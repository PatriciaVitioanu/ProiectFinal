import { useContext } from "react";

import DestinationCard from "../destination-card/DestinationCard";

import "./Carousel.css";

import PropTypes from 'prop-types';
import { DestinationContext } from "../../App";

function Carousel() {
  const {destinations} = useContext(DestinationContext);
  const trendingDestinations = destinations.filter(({trending})=> trending);

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

Carousel.propTypes= {
  destinations: PropTypes.array,
}
