import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies" element={<Movies />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
