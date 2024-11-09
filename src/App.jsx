import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home";

import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Badges from './pages/Badges/Badges';

function App() {
  


  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/badges' element={<Badges />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
