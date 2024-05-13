import { useParams, useNavigate } from "react-router-dom";

import './DestinationDetails.css';
import { useEffect, useState } from "react";

async function retrieveDestinations(setDestinations, destinationId){
    const response = await fetch (`http://localhost:3000/destinations/${destinationId}`);
    const destination = await response.json();

    setDestination(destination);
}

 export default function DestinationDetails (){
    const[destination, setDestination]=useState({});
    const { idFromPath } = useParams ();
    const navigate = useNavigate();

    useEffect(() => {
      retrieveDestinations(setDestination, idFromPath);
    }, []);

    useEffect(() => {
if (!destination) {
    navigate (`/`);
}
},[destination])

    if(!destination){
        return;
    }

    const { title, imageUrl, continent } = destination;

    return (
        <section>
            <header>
                <h3> {title} </h3>
            </header>

            <img src={imageUrl}></img>

            <p className="destination-details__continent"> Continent: {continent} </p>
        </section>
    );
}