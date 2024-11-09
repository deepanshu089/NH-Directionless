import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";

import Navbar from "./components/Navbar/Navbar";
import JournalsPage from "./pages/Journals/Journals.jsx";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Games from "./pages/Games/Games";
import Quiz from "./pages/Games/quiz";
import Contact from "./pages/Contacts/Contacts";
import Badges from "./pages/Badges/Badges.jsx";
import Profile from "./pages/Profile/Profile.jsx";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/games" element={<Games />} />
        <Route path="/journals" element={<JournalsPage />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/badge" element={<Badges />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
