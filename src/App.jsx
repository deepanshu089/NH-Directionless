
import { Route, Routes } from 'react-router-dom';
import './App.css';

import Home from "./pages/Home/Home";
import SchedulerForm from './components/Scheduler/SchedulerForm';
import ScheduleGenerate from './components/Scheduler/ScheduleGenerate';
import Navbar from './components/Navbar/Navbar';
import JournalsPage from './pages/Journals/journals';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Games from './pages/Games/Games';
import Quiz from './pages/Games/quiz';
import Contact from './pages/Contacts/Contacts';
import Chatbot from './pages/Chatbot/Chatbot';
import { useState } from 'react';

function App() {
  const [studyPlan, setStudyPlan] = useState(null);

  const handleGeneratePlan = (data) => {
    setStudyPlan(data);
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/games' element={<Games />} />
        <Route path='/journals' element={<JournalsPage />} />
        <Route path='/quiz' element={<Quiz />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/talk' element={<Chatbot/>}/>
        <Route path='/scheduler' element={<SchedulerForm onGenerate={handleGeneratePlan} />} />
        <Route path='/schedule-generate' element={<ScheduleGenerate studyPlan={studyPlan} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
