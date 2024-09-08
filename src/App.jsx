import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Box } from "@mui/system";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Box sx={{ height: "100vh", width: "100vw", backgroundColor: '#f4f4f4' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
        </Routes>
      </Box>
      <Footer/>
    </Router>
  );
}

export default App;
