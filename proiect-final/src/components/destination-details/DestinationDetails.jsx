import { useParams, useNavigate } from "react-router-dom";

import "./DestinationDetails.css";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../App";

async function retrieveDestination(setDestination, destinationId) {
  const response = await fetch(
    `http://localhost:3000/destinations/${destinationId}`
  );
  const destination = await response.json();

  setDestination(destination);
}

export default function DestinationDetails() {
  const { auth } = useContext(AuthContext);

  const [destination, setDestination] = useState({});
  const { idFromPath } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    retrieveDestination(setDestination, idFromPath);
  }, [idFromPath]);

  if (!destination) {
    return;
  }

  const { id, title, imageUrl, continent, description } = destination;

  function deleteDestination() {
    const userConfirmedAction = confirm(
      "Are you sure you want to delete the destination?"
    );

    if (userConfirmedAction) {
      fetch(`http://localhost:3000/destinations/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      }).then(() => navigate("/"));
    }
  }

  function editDestination() {
    navigate(`/edit-destination/${id}`);
  }

  return (
    <section>
      <header>
        <h3 className="details_title"> {title} </h3>
      </header>

      <img className="details_img" src={imageUrl} />

      <p className="destination-details__description">{description}</p>

      <p className="destination-details__continent"> Continent: {continent} </p>
      {auth ? (
        <>
          <button className="details_button_delete" onClick={deleteDestination}>
            Delete destination
          </button>
          <button className="details_button_edit" onClick={editDestination}>
            Edit destination
          </button>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
