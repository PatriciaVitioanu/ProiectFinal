import Home from "./components/home/FirstPage";
import DestinationDetails from "./components/destination-details/DestinationDetails";

import React, {useEffect, useState } from "react";

import "./App.css";

import {Routes, Route, useNavigate } from "react-router-dom";
import CreateDestination from "./components/create-destination/CreateDestination";
import { retrieveDestinations } from "./library/destinations";
import Navbar from "./components/navbar/Navbar";
import { Register } from "./components/auth/register/Register";
import Login from "./components/auth/login/Login";
import EditUser from "./components/auth/edit-user/EditUser";
import AboutMe from "./components/about-me/AboutMe";
import ContactMe from "./components/contact-me/ContactMe";

export const DestinationContext = React.createContext();
export const AuthContext = React.createContext();


function App() {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const [destinations, setDestinations] = useState([]);
  const [auth, setAuth] = useState(accessToken);

  useEffect(() => {
    retrieveDestinations(setDestinations, auth, navigate).catch ((error) => console.log(error));
  }, [auth, navigate]);

  return (
    <>
      <DestinationContext.Provider value={{ destinations, setDestinations }}>
        <AuthContext.Provider value={{auth, setAuth}}>
         
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route
                path="/destination/:idFromPath"
                element={<DestinationDetails />}
              ></Route>
              <Route
                path="/create-destination"
                element={<CreateDestination />}
              ></Route>
              <Route
                path="/edit-destination/:idFromPath"
                element={<CreateDestination />}
              ></Route>
              <Route path="/register" element={<Register/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/edit-user/:idFromPath" element={<EditUser/>}/>
              <Route path="/about-me" element={<AboutMe/>}/>
              <Route path="/contact-me" element={<ContactMe/>}/>
            </Routes>
        </AuthContext.Provider>
      </DestinationContext.Provider>
    </>
  );
}

export default App;
