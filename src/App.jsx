


import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from "./pages/Home/Home";

import Navbar from './components/Navbar/Navbar';
import JournalsPage from './pages/Journals/journals.jsx';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Games from './pages/Games/Games';
import Quiz from './pages/Games/quiz';
import Contact from './pages/Contacts/Contacts';


function App() {
  

  return (
    <>
      
      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/games' element={<Games />}/>
        <Route path='/journals' element={<JournalsPage/>}/>
        <Route path='/quiz' element={<Quiz/>}/>
        <Route path='/contact' element={<Contact/>}/>
        </Routes>
      <Footer />
    </>
  )
}

export default App