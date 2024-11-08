import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Games from './pages/Games/Games';
import Quiz from './pages/Games/quiz';

function App() {
  

  return (
    <>
      <Navbar />
      <Games/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/quiz' element ={<Quiz/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App;
