import React from "react";
import { BrowserRouter as Router, Route, Routes,Navigate } from "react-router-dom";
import NavBar from "./components/Navbar.jsx";
import Customer from "./pages/Customer.jsx";
import Services from "./pages/Services.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Footer from "./components/Footer.jsx";
import Features from "./pages/Features.jsx";
import Contactus from "./pages/Contactus.jsx";
import FAQ from "./pages/FAQ.jsx";
import SignIn from "./pages/Signin.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Chatbot from "./components/chatbot.jsx";
import Publicsector from "./pages/Publicsector.jsx";
import LifeScience from "./pages/Lifescience.jsx";
import HelthCare from "./pages/Healthcare.jsx";
import RetailPage from "./pages/RetailPage.jsx";
import Shedule from "./pages/Shedule.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Education from "./pages/Education.jsx";
import Professional from "./pages/Professional.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <ScrollToTop/>
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/publicsector" element={<Publicsector />} />
        <Route path="/lifescience" element={<LifeScience />} />
        <Route path="/healthcare" element={< HelthCare/>} />
        <Route path="/retailpage" element={< RetailPage/>} />
        <Route path="/shedule" element={< Shedule/>} />
        <Route path="/about" element={<AboutUs/>} />
        <Route path="/education" element={<Education/>} />
        <Route path="/professional" element={<Professional/>} />



      </Routes>
      <Chatbot/>
    <Footer/>

    </Router>
  );
}

export default App;
