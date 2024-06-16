import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { DestinationContext } from "../../App";
import "./CreateDestination.css";

export default function CreateDestination() {
  const navigate = useNavigate();
  if (!localStorage.getItem("accessToken")) {
    navigate("/login");
  }
  const accessToken = localStorage.getItem("accessToken");
  const { destinations } = useContext(DestinationContext);
  const { idFromPath } = useParams();
  const selectedDestination = destinations.find(
    (destination) => destination.id === idFromPath
  );

  function saveDestination(event) {
    event.preventDefault();
    const formElement = event.target;

    const { title, url, year, season, continent, description } = formElement;

    const destination = {
      title: title.value,
      createdByUser: localStorage.getItem("userId"),
      description: description.value,
      imageUrl: url.value,
      year: year.value.substring(0, 4),
      season: season.value,
      continent: continent.value,
    };

    formElement.reset();
    if (idFromPath) {
      fetch(`http://localhost:3000/destinations/${idFromPath}`, {
        method: "PUT",
        body: JSON.stringify(destination),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(() => navigate("/"));
    } else {
      fetch("http://localhost:3000/destinations", {
        method: "POST",
        body: JSON.stringify(destination),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(() => {
        navigate("/");
        console.log("destination added");
      });
    }
  }

  return (
    <form onSubmit={saveDestination} className="form-container">
      <h2>Create a new destination - where you dream to go to :)</h2>
      <br/>
      <div className="form-row">
        <label htmlFor="title"></label>
        <input
          name="title"
          className="form-input"
          id="title"
          type="text"
          required
          minLength={5}
          defaultValue={selectedDestination?.title}
          placeholder="Title"
        />
      </div>

      <div className="form-row">
        <label htmlFor="description"></label>
        <input
          name="description"
          className="form-input"
          id="description"
          type="text"
          required
          minLength={5}
          defaultValue={selectedDestination?.description}
          placeholder="Description"
        />
      </div>

      <div className="form-row">
        <label htmlFor="imgUrl"></label>
        <input
          name="url"
          className="form-input"
          type="url"
          id="imgUrl"
          required
          defaultValue={selectedDestination?.imageUrl}
          placeholder="Image Url"
        />
      </div>

      <div className="form-row">
        <label htmlFor="year"></label>
        <input
          name="year"
          className="form-input"
          type="number"
          id="year"
          required
          defaultValue={selectedDestination?.year}
          placeholder="Year"
        />
      </div>

      <div className="form-row">
        <label htmlFor="season">Season:</label>
        <select
          name="season"
          id="season"
          required
          defaultValue={selectedDestination?.season}
          className="form-input"
        >
          <option disabled>Select one</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>
      </div>

      <div className="form-row">
        <label htmlFor="continent">Continent:</label>
        <select
          name="continent"
          id="continent"
          required
          defaultValue={selectedDestination?.continent}
          className="form-input"
        >
          <option disabled>Select one</option>
          <option value="europa">Europe</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="south america">South America</option>
          <option value="north america">North America</option>
          <option value="australia">Australia</option>
          <option value="antarctica">Antarctica</option>
        </select>
      </div>

      <button type="submit" className="form-button">
        Save Destination
      </button>
    </form>
  );
}