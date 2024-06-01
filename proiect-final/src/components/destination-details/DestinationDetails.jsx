import { useParams, useNavigate } from "react-router-dom";

import "./DestinationDetails.css";
import { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../../App";
import { AuthContext } from "../../App";

async function retrieveDestination(setDestination, destinationId) {
  const response = await fetch(
    `http://localhost:3000/destinations/${destinationId}`
  );
  const destination = await response.json();

  setDestination(destination);
}

export default function DestinationDetails() {
  const {auth} = useContext(AuthContext);

  const [destination, setDestination] = useState({});
  const { idFromPath } = useParams();
  const navigate = useNavigate();
  const { setDestinations } = useContext(DestinationContext);

  useEffect(() => {
    retrieveDestination(setDestination, idFromPath);
  }, [idFromPath]);

  useEffect(() => {
    if (!destination) {
      navigate("/");
    }
  }, [destination, navigate]);

  if (!destination) {
    return;
  }

  const { id, title, imageUrl, continent } = destination;

  function deleteDestination() {
    const userConfirmedAction = confirm(
      "Are you sure you want to delete the destination?"
    );

    if (userConfirmedAction) {
      fetch(`http://localhost:3000/destinations/${id}`, {
        method: "DELETE",
      }).then(() => {
        retrieveDestination(setDestinations);

        navigate("/");
      });
    }
  }

  function editDestination() {
    navigate(`/edit-destination/${id}`);
  }

  return (
    <section>
      <header>
        <h3> {title} </h3>
      </header>

      <img src={imageUrl} />

      <p className="destination-details__continent"> Continent: {continent} </p>
      {auth ? (
        <>
          <button onClick={deleteDestination}>Delete destination</button>
          <button onClick={editDestination}>Edit destination</button>
        </>
      ) : (
        ""
      )}
    </section>
  );
}
