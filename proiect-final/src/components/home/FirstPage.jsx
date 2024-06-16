import Search from "../search/Search";
import Carousel from "../carousel/Carousel";
import Recommended from "../recommended/Recommended";
import { DestinationContext } from "../../App";
import { useState, useContext } from "react";
import "./FirstPage.css";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { destinations } = useContext(DestinationContext);

  function onSearchChange(_searchTerm) {
    setSearchTerm(_searchTerm);
  }

  if (!destinations?.length) {
    return <h1> There are no destinations yet!</h1>;
  }
  return (
    <>
      <section className="sectionContainer">
        <Carousel />
        <Search onSearchChange={onSearchChange} />
        <Recommended searchTerm={searchTerm} />
      </section>
    </>
  );
}
