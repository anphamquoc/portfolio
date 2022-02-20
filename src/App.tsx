import "./App.css";
import "./index.scss";
import { NavBar } from "./components/NavBar/NavBar";
import "./font-awesome-pro-5/css/all.css";
import { Home } from "./view/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./view/About/About";
import Projects from "./view/Project/Projects";
import CV from "./view/Resume/CV";
import Blogs from "./view/Blogs/Blogs";
import Footer from "./components/Footer/Footer";
import { useEffect, useState } from "react";
import Loading from "./assets/port.svg";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  if (loading) {
    return (
      <img
        src={Loading}
        alt="loading"
        style={{
          position: "absolute",
          left: "50%",
          top: "40%",
          translate: "(-50%, -50%)",
        }}
      />
    );
  }
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Projects />} />
        <Route path="/resume" element={<CV />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
