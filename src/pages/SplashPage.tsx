import { Link } from "react-router-dom";

function SplashPage() {
  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: "url(/background/background.png)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col mx-auto">
        <div className="flex justify-center mt-16">
          <img
            src="/logo/logo.png"
            loading="lazy"
            alt="logo"
            width="120px"
            height="200px"
          ></img>
        </div>
        <div className="flex justify-center mt-20 font-Verdana text-dark-purple text-4xl font-bold">
          ENTERPRISE PORTAL
        </div>
        <div className="flex flex-col gap-y-4 mt-16">
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic"
            to={"https://calendly.com/luminadex"}
            target="_blank"
          >
            BOOK A MEETING
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic"
            to={"https://www.linkedin.com/in/evan-kereiakes/"}
            target="_blank"
          >
            CONNECT ON LINKEDIN
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic"
            to={"https://qrcodes.pro/7Zw0Zo"}
            target="_blank"
          >
            CONNECT ON TELEGRAM
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic"
            to={"https://luminadex.com/"}
            target="_blank"
          >
            VISIT SITE
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
