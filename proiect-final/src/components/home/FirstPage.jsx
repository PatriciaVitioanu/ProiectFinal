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
      <Search onSearchChange={onSearchChange} />
      <section>
        <Carousel />
        <Recommended searchTerm={searchTerm} />
        <h1 className="header_home"> Travel is not just about discovering new places; it&apos;s about
            uncovering new perspectives, enriching our souls with experiences,
            and collecting moments that become cherished memories for a
            lifetime.</h1>
         <section className="section-container">
        <div className="video-container">
          <iframe
            className="home_video"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/aaExiKsvt9A?si=3DhqN6WMuOg89NDB"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      
        </section>
      </section>
    </>
  );
}
