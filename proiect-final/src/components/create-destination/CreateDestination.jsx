import { useNavigate, useParams } from "react-router-dom";
import "./CreateDestination.css";
import { DestinationContext } from "../../App";
import { useContext } from "react";

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

    const { title, url, year, season, continent } = formElement;

    const destination = {
      title: title.value,
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
      }).then(() => {
        console.log("movie was modified!");
        navigate("/");
      });
    } else {
      fetch("http://localhost:3000/destinations", {
        method: "POST",
        body: JSON.stringify(destination),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      }).then(() => navigate("/"));

      formElement.reset();
    }
  }

  return (
    <form onSubmit={saveDestination}>
      <fieldset>
        <label htmlFor="title">Title</label>
        <input
          name="title"
          className="form-input"
          id="title"
          type="text"
          required
          minLength={5}
          defaultValue={selectedDestination?.title}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="imgUrl">Image Url:</label>
        <input
          name="url"
          className="form-input"
          type="url"
          id="imgUrl"
          required
          defaultValue={selectedDestination?.imageUrl}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="year">Year</label>
        <input
          name="year"
          className="form-input"
          type="string"
          id="year"
          required
          defaultValue={selectedDestination?.year}
        />
      </fieldset>

      <fieldset>
        <label htmlFor="season">Season</label>
        <select
          name="season"
          id="season"
          required
          defaultValue={selectedDestination?.season}
        >
          <option disabled>Select one</option>
          <option value="spring">Spring</option>
          <option value="summer">Summer</option>
          <option value="autumn">Autumn</option>
          <option value="winter">Winter</option>
        </select>
      </fieldset>

      <fieldset>
        <label htmlFor="continent">Continent</label>
        <select
          name="continent"
          id="continent"
          required
          defaultValue={selectedDestination?.continent}
        >
          <option disabled>Select one</option>
          <option value="europa">Europa</option>
          <option value="asia">Asia</option>
          <option value="africa">Africa</option>
          <option value="south america">South America</option>
          <option value="north america">North America</option>
          <option value="australia">Australia</option>
          <option value="antarctica">Antarctica</option>
        </select>
      </fieldset>

      <button>Save destination</button>
    </form>
  );
}
