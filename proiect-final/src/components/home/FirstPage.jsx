import Search from "../search/Search";
import Carousel from "../Carousel";
import Recommended from "../recommended/Recommended";

import { useState, useEffect, useContext } from "react";
import { DestinationContext } from "../../App";

//Version 1
//function retrieveDestinations() {
//  return fetch("http://localhost:3000/destinations").then((response) =>
// response.json()
//);
//}

async function retrieveDestinations(setDestinations) {
  const response = await fetch("http://localhost:3000/destinations");
  const destinationsFromServer = await response.json();

  setDestinations(destinationsFromServer);
}

export default function Home () {
    const [searchTerm, setSearchTerm] = useState("");
    //const [destinations, setDestinations] = useState([]);
    const { setDestinations} = useContext(DestinationContext); 

    function onSearchChange(_searchTerm) {
      setSearchTerm(_searchTerm);
    }

     //Version 1
  //useEffect(() => {
  // async function getDestinations() {
  // const destinationsFromServer = await retrieveDestinations();

  //  setDestinations(destinationsFromServer);
  // }
  // getDestinations();
  //}, []);

  useEffect(() => {
    retrieveDestinations(setDestinations);
  });

    return (
        <>
                <Search onSearchChange={onSearchChange} />
                <section>
                  <Carousel />
                  <Recommended searchTerm={searchTerm} />
                </section>
        </>
    );
}