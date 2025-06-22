import { Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./components/Contact";
import Careers from "./components/Careers";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notfound from "./components/Notfound";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/project" element={<Project />} />
        <Route path="/services" element={<Services />} />
        <Route path="*" element={<Notfound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
