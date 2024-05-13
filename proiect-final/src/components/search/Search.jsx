import { BsFillSearchHeartFill } from "react-icons/bs";
import PropTypes from 'prop-types';

import './Search.css';

function Search ({ onSearchChange }){

function inputChange(event) {
    onSearchChange(event.target.value);
}

return (
    <div className="search-container">
      <BsFillSearchHeartFill className="search-icon" />
      <input
        onChange={inputChange}
        className="search"
        type="text"
        placeholder="Search for a destination"
      />
    </div>
  );
}
 
export default Search

Search.propTypes = {
    onSearchChange: PropTypes.func,
  };