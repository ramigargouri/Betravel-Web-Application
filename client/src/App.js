import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/home";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Profil from "./components/Profil";
import EditProfil from "./components/EditProfil";
import Contact from "./components/Contact";
import Confirmed from "./components/Confirmed";
import ResetPassword from "./components/ResetPassword";
import ConfirmPassword from "./components/ConfirmPassword";
import AboutUs from "./components/AboutUs";
import DetailHotel from "./components/DetailHotel";
import ListeHotel from "./components/ListeHotel";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Confirmed/:id" element={<Confirmed />} />
          <Route path="/Confirmpass/:id" element={<ConfirmPassword />} />
          <Route path="/Profil/Edit" element={<EditProfil />} />
          <Route path="/Profil" element={<Profil />} />
          <Route path="/Restpass" element={<ResetPassword />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Hotel/Detail/:id" element={<DetailHotel />} />
          <Route path="/Hotel/Liste" element={<ListeHotel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
