import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home";

import Footer from './components/Footer/Footer';
import About from './pages/About/About';

function App() {
  

  return (
    <>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
