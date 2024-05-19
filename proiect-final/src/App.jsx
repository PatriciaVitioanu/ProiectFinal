import React, { useState } from "react";

import "./App.css";

import Home from "./components/home/FirstPage";
import DestinationDetails from "./components/destination-details/DestinationDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateDestination from "./components/create-destination/CreateDestination";
import Navbar from "./components/Navbar";

export const DestinationContext = React.createContext();

function App() {
  const [destinations, setDestinations] = useState([]);

  return (
    <>
      <DestinationContext.Provider value={{ destinations, setDestinations }}>
        <BrowserRouter>

        <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route
              path="/destination/:idFromPath"
              element={<DestinationDetails />}
            ></Route>
            <Route path="/create-destination" element={<CreateDestination/>}></Route>
          </Routes>
        </BrowserRouter>
      </DestinationContext.Provider>
    </>
  );
}

export default App;
