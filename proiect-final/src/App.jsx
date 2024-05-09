import './App.css'
import Navbar from "./components/Navbar";
import Search from './components/Search';
import Carousel from './components/Carousel';
import Recommended from './components/Recommended';
import { useState } from 'react';


function App () {
  const [searchTerm, setSearchTerm] = useState('');
  
function onSearchChange (_searchTerm){
  setSearchTerm(_searchTerm);
}
  return (
 <>
 <Navbar />
 <Search onSearchChange={onSearchChange}/>
 <Carousel />
 <Recommended searchTerm={searchTerm} />
 </>
  );
}

export default App;
