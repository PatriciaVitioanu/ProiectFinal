import './App.css'
import Navbar from "./components/Navbar";
import Search from './components/search/Search';
import Carousel from './components/Carousel';
import Recommended from './components/recommended/Recommended';
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
 <section>
 <Carousel />
 <Recommended searchTerm={searchTerm} />
 </section>
 </>
  );
}

export default App;
