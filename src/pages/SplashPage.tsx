import { Link } from "react-router-dom";

function SplashPage() {
  return (
    <div className="min-h-screen splash-background">
      <div className="container flex flex-col mx-auto relative">
        <div className="flex justify-center mt-16">
          <img
            src="/logo/logo.png"
            loading="lazy"
            alt="logo"
            width="120px"
            height="200px"
          ></img>
        </div>
        <div className="flex text-center justify-center mt-20 font-Verdana text-dark-purple text-4xl font-bold uppercase">
          Enterprise Portal
        </div>
        <div className="flex flex-col gap-y-4 mt-16 px-3">
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://calendly.com/luminadex"}
            target="_blank"
          >
            Book a Meeting
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://www.linkedin.com/in/evan-kereiakes/"}
            target="_blank"
          >
            Connect on Linkedin
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://t.me/evankereiakes"}
            target="_blank"
          >
            Connect on Telegram
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://luminadex.com/"}
            target="_blank"
          >
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
