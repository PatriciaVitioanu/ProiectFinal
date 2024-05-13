import "./App.css";

import Home from "./components/home/FirstPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import DestinationDetails from "./components/destination-details/DestinationDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/destination/:idFromPath" element={<DestinationDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
