import Navbar from "../Navbar";
import Search from "../search/Search";
import Carousel from "../Carousel";
import Recommended from "../recommended/Recommended";

import { useState, useEffect } from "react";

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
    const [destinations, setDestinations] = useState([]);

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
  }, []);

    return (
        <>
         <Navbar />
                <Search onSearchChange={onSearchChange} />
                <section>
                  <Carousel destinations={destinations} />
                  <Recommended destinations={destinations} searchTerm={searchTerm} />
                </section>
        </>
    );
}