import './App.css';
import Home from "./Screen/Home/Home.jsx"
import Price from "./Screen/Price/Price.jsx"
import Contact from "./Screen/Contact/Contact.jsx"
import Navbar from "./Component/Nav/Navbar.jsx"
import { Route, Routes } from 'react-router-dom';
import Gallery from './Screen/Gallery/Gallery.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/gallery' element= {<Gallery />} />
        <Route path='/price' element={<Price />} />
        <Route path='/contact' element={ <Contact />} />
      </Routes>
    </div>
  );
}

export default App;
