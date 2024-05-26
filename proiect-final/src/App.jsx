import React, { useEffect, useState } from "react";

import "./App.css";

import Home from "./components/home/FirstPage";
import DestinationDetails from "./components/destination-details/DestinationDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateDestination from "./components/create-destination/CreateDestination";
import Navbar from "./components/Navbar";

export const DestinationContext = React.createContext();

async function retrieveDestinations(setDestinations) {
  const response = await fetch("http://localhost:3000/destinations");
  const destinationsFromServer = await response.json();

  setDestinations(destinationsFromServer);
}

function App() {
  const [destinations, setDestinations] = useState([]);

  useEffect (() => {
    retrieveDestinations(setDestinations);
  },[]);

  return (
    <>
      <DestinationContext.Provider value={{ destinations, setDestinations }}>
        <BrowserRouter>

        <Navbar/>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/destination/:idFromPath"
              element={<DestinationDetails />}
            ></Route>
            <Route path="/create-destination" element={<CreateDestination/>}></Route>
            <Route path="/edit-destination/:idFromPath" element={<CreateDestination/>}></Route>
           </Routes>
        </BrowserRouter>
      </DestinationContext.Provider>
    </>
  );
}

export default App;
