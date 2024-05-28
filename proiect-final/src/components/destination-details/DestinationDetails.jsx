import { useParams, useNavigate } from "react-router-dom";

import './DestinationDetails.css';
import { useContext, useEffect, useState } from "react";
import { DestinationContext } from "../../App";
import { retrieveDestinations } from "../../library/destinations";


 export default function DestinationDetails (){
    const[destination, setDestination]=useState({});
    const { idFromPath } = useParams();
    const navigate = useNavigate();
    const { destinations, setDestinations } = useContext(DestinationContext);

    useEffect(() => {
      retrieveDestinations(setDestination, idFromPath);
    }, []);

    useEffect(() => {
if (!destination) {
    navigate ('/');
}

},[destination])

    if(!destination){
        return;
    }

    const { title, imageUrl, continent, id } = destination;


    function deleteDestination(){
    const userConfirmedAction = confirm('Are you sure you want to delete the destination?')
        
    if (userConfirmedAction){
        fetch(`http://localhost:3000/destinations/${id}`, {
            method: "DELETE"
        }).then(()=> {
            //const updatedDestinations = destinations.filter((destination) => destination.id !== id);
            //setDestinations()
            retrieveDestinations(setDestinations);
            
            navigate('/');
            });
    }
}

    function editDestination () {
        navigate (`/edit-destination/${id}`)
    }


    return (
        <section>
            <header>
                <h3> {title} </h3>
            </header>

            <img src={imageUrl}/>

            <p className="destination-details__continent"> Continent: {continent} </p>

            <button onClick={deleteDestination}>Delete destination</button>
            <button onClick={editDestination}>Edit destination</button>
        </section>
    );
}