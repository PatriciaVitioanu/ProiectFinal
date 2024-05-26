import Search from "../search/Search";
import Carousel from "../Carousel";
import Recommended from "../recommended/Recommended";
import { DestinationContext } from "../../App";

import { useState, useContext } from "react";



export default function Home () {
    const [searchTerm, setSearchTerm] = useState("");
    const { setDestinations } = useContext(DestinationContext); 

    function onSearchChange(_searchTerm) {
      setSearchTerm(_searchTerm);
    }


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