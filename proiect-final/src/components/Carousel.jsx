import DestinationCard from "./DestinationCard";

import "./Carousel.css";

import PropTypes from 'prop-types';

function Carousel({destinations}) {
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
