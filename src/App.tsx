import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import React, { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HoloImg from "./assets/backgrounds/holo.png";
import SpinnerImg from "./assets/images/spinner.svg";

function App() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = HoloImg;
    image.onload = () => {
      setImageLoaded(true);
    };
  }, []);

  return (
    <div className={`App ${imageLoaded && "bg-primary"}`}>
      {imageLoaded ? (
        <>
          <Router>
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
              </Routes>
            </Layout>
          </Router>
        </>
      ) : (
        <img src={SpinnerImg} alt="" />
      )}
    </div>
  );
}

export default App;
