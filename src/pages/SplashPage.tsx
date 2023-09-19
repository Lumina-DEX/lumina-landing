import { Link } from "react-router-dom";

function SplashPage() {
  interface User {
    email: string;
    firstName: string;
    lastName: string;
  }

  const trackRecord = (eventName: string, User: User) => {
    const properties = {
      email: User.email,
      FIRSTNAME: User.firstName,
      LASTNAME: User.lastName,
    };
    const event_data = {
      name: eventName,
    };
    window.sendinblue.track(eventName, properties, event_data);
  };

  const brevoTrack = (eventName: string) => {
    const visitor: User = {
      email: "client@luminadex.com",
      firstName: "client",
      lastName: "client",
    };
    switch (eventName) {
      case "Book a Meeting":
        trackRecord(eventName, visitor);
        break;
      case "Connect to Linkedin":
        trackRecord(eventName, visitor);
        break;
      case "Connect to Telegram":
        trackRecord(eventName, visitor);
        break;
      case "Visit Site":
        trackRecord(eventName, visitor);
        break;
      default:
        break;
    }
  };

  return (
    <div className="min-h-screen splash-background">
      <div className="container flex flex-col mx-auto relative">
        <div className="flex justify-center">
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
            onClick={() => brevoTrack("Book a Meeting")}
          >
            Book a Meeting
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://www.linkedin.com/in/evan-kereiakes/"}
            target="_blank"
            onClick={() => brevoTrack("Connect to Linkedin")}
          >
            Connect on Linkedin
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://t.me/evankereiakes"}
            target="_blank"
            onClick={() => brevoTrack("Connect to Telegram")}
          >
            Connect on Telegram
          </Link>
          <Link
            className="bg-dark-purple py-4 text-center text-xl text-white rounded-md font-Metrophobic uppercase"
            to={"https://luminadex.com/"}
            target="_blank"
            onClick={() => brevoTrack("Visit Site")}
          >
            Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SplashPage;
