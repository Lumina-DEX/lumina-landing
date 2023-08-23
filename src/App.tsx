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

function Contact() {
  return (
    <div className="w-screen h-screen">
      <iframe
        className="block mx-auto max-w-full"
        title="Lumina Contact"
        width="100%"
        height="100%"
        src="https://5ee5af98.sibforms.com/serve/MUIFABF8Z7uyiu2ktHyP3Z8RYbiJRV6MLElq2ffgGmxWvt6j0hB6cBEZoumkoZahPw6hgQfxtw4szfCQ0R07LgMTk_WRQ7Tft1e0Ub82WAXPLE6eX7MIeWhHPo7877rlrZ5Cu3roeek7nLim3uU9SRQb-kWPORUmWkb1am91fbY5Twq3qxPSnnGL6tHxFmdY0PbV0Lt5UptZ4Z3d"
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
  } else if (subDomain === "contact") {
    return <Contact />;
  }

  return <Landing />;
}

export default App;
