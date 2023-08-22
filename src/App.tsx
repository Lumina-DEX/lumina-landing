import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import HoloImg from "./assets/backgrounds/holo.png";
import SpinnerImg from "./assets/images/spinner.svg";

function Landing() {
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
        <div className="flex h-screen w-full justify-center items-center">
          <img src={SpinnerImg} alt="" />
        </div>
      )}
    </div>
  );
}

function SignUp() {
  return (
    <div className="w-screen h-screen">
      <iframe
        className="block mx-auto max-w-full"
        title="Lumina Signup"
        width="100%"
        height="100%"
        src="https://5ee5af98.sibforms.com/serve/MUIFAGH_HzdyEGl2H6tNAw88cDB3RULedGebH0lPKJivK4eTzKUCdnZK-vbeBFs36tCJCJNTveA6cUquWRKSbqtllEYLOauSQHH6AYfdTxh_7cDdfzVTbrBPGzzdK_WnnLYburyrNuLFv2dCMFaP6N7VHKPkUqjRf9O3xCxcS06X1zQx3TZ7isnqbYkptNr8H5jbL7lITbvQDxdx"
        allowFullScreen
      ></iframe>
    </div>
  );
}

function App() {
  const host = window.location.host;
  const subDomain = host.replace(".luminadex.com", "");

  if (subDomain === "signup") {
    return <SignUp />;
  }

  return <Landing />;
}

export default App;
