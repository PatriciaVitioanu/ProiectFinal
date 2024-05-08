import PropTypes from 'prop-types';

function DestinationCard({destinationElement}){
    const {id, imageUrl, year, season, continent, title} = destinationElement;

    return(
  <li className="destination" key={id}>
          <img className="destination__image" src={imageUrl} />
         <div>
          <span className="destination__year">{year}</span>
          <span className="destination__season">{season}</span>
          <span className="destination__continent">
            {continent}
          </span>
          </div>
          
          <div className="destination__bookmark">
            <i className="destination__bookmark-icon"></i>
          </div>
          <h3 className="destination__title">{title}</h3>
        </li>
        );
  }
  
  export default DestinationCard;

DestinationCard.propTypes = {
destinationElement: {
    id: PropTypes.string,
    imageUrl: PropTypes.string,
    year: PropTypes.string, 
    season: PropTypes.string, 
    continent: PropTypes.string, 
    title: PropTypes.string, 
},
};