import { useEffect, useState } from "react";
import { Button } from "antd";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { GiWarPick } from "react-icons/gi";
import { MdGeneratingTokens, MdGroups3 } from "react-icons/md";
import { Link } from "react-router-dom";

declare global {
  interface Window {
    sendinblue: any;
  }
}

interface User {
  email: string;
  firstName: string;
  lastName: string;
}

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(1920);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);

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
      email: "gregorysantini@luminadex.com",
      firstName: "gregory",
      lastName: "santini",
    };
    switch (eventName) {
      case "litepaper":
        trackRecord(eventName, visitor);
        break;
      case "signup":
        trackRecord(eventName, visitor);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full mt-16">
      {/* section1 */}
      <div className="flex flex-col justify-center">
        <div
          className="w-full flex justify-center items-center flex-row py-20 max-sm:py-10"
          style={{
            backgroundImage: "linear-gradient(#351c75, #1D133C)",
          }}
        >
          <div className="basis-3/5 px-16 max-sm:basis-4/5 max-sm:px-2">
            <img
              src="/logo/logo2.png"
              loading="lazy"
              alt="lumina"
              className="w-full h-full translate-y-[-32px]"
            ></img>
          </div>
        </div>
        <div
          className="py-10 flex flex-col gap-6"
          style={{
            backgroundImage: "url(/background/background.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="font-bold text-dark-purple text-3xl font-Verdana px-4">
            The future of finance is in plain sight
          </div>
          <div className="text-dark-purple font-bold px-4">
            Lumina is a zero-knowledge, KYC-enabled, enterprise-ready DEX on
            Mina
          </div>
          <div className="flex flex-row gap-x-4 justify-center">
            <Link to={"https://signupluminadex.netlify.app/"} target="_blank">
              <Button
                shape="round"
                size={"large"}
                className="font-bold bg-l1 text-white border-primary"
                onClick={() => brevoTrack("signup")}
              >
                Sign Up
              </Button>
            </Link>
            <Button
              shape="round"
              size={"large"}
              onClick={() => brevoTrack("litepaper")}
              className="font-bold text-dark-purple border-primary bg-white text-white"
            >
              Litepaper
            </Button>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="pt-10">
        <div className="container mx-auto flex flex-col gap-8 text-dark-purple">
          <div className="flex flex-row justify-center flex-wrap w-2/3 mx-auto">
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4 py-2">
              <div className="!font-Metrophobic text-xl font-bold">Clarity</div>
              <div className="rounded-full border-2 border-primary p-6 shadow-md shadow-blue-500/50">
                <BsCurrencyExchange className="text-[80px]" />
              </div>
              {windowWidth <= 425 ? (
                <div className="!font-Metrophobic">
                  zkProofs enable private transactions with verified
                  counterparties
                </div>
              ) : (
                <div className="!font-Metrophobic">
                  Zero-knowledge proofs enable trustless, private, transactions
                  with verified counterparties without exposing sensitive
                  information
                </div>
              )}
            </div>
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4 py-2">
              <div className="!font-Metrophobic text-xl font-bold">
                Compliance
              </div>
              <div className="rounded-full border-2 border-primary p-6 shadow-md shadow-blue-500/50">
                <MdGeneratingTokens className="text-[80px]" />
              </div>
              {windowWidth <= 425 ? (
                <div className="!font-Metrophobic ">
                  Built-in KYC and permissioned liquidity pools
                </div>
              ) : (
                <div className="!font-Metrophobic ">
                  Built-in KYC, permissioned liquidity pools, and privacy for
                  retail and institutional users in accordance with prevailing
                  regulatory requirements
                </div>
              )}
            </div>
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4 py-2">
              <div className="!font-Metrophobic text-xl font-bold">
                Confidence
              </div>
              <div className="rounded-full border-2 border-primary p-6 shadow-md shadow-blue-500/50">
                <MdGroups3 className="text-[80px]" />
              </div>
              {windowWidth <= 425 ? (
                <div className="!font-Metrophobic ">
                  Lumina is the guiding light for TradFi and Web2 DeFi ambitions
                </div>
              ) : (
                <div className="!font-Metrophobic ">
                  Our thoughtful approach to decentralized compliance positions
                  DeFi as a clear growth catalyst for TradFi and Web2 companies
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col text-dark-purple py-10">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="text-2xl font-bold">
            Backed by the top names in Blockchain and zk!
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap px-28 gap-y-4">
            <div className="basis-1/2 flex justify-between">
              <div className="flex items-center justify-center basis-1/2 px-2">
                <div className="h-32 w-32 flex justify-center  items-center px-2 py-2  ">
                  <Link
                    to={"https://www.bigbrain.holdings/"}
                    target="_blank"
                    className="w-full h-full"
                    style={{
                      backgroundImage: "url(/investors/big.png)",
                      backgroundSize: "100% 70%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Link>
                </div>
              </div>
              <div className="flex items-center justify-center basis-1/2 px-2">
                <div className="h-32 w-32 flex justify-center  items-center px-2 py-2 ">
                  <Link
                    to={"https://jumpcrypto.com/"}
                    target="_blank"
                    className="w-full h-full"
                  >
                    <img
                      src="/investors/Jump.png"
                      loading="lazy"
                      alt="Jump"
                      className="w-full h-full"
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
            <div className="basis-1/2 flex flex-row">
              <div className="flex items-center justify-center basis-1/2 px-2">
                <div className="h-32 w-32 cursor-pointer flex justify-center  items-center px-2 py-2 ">
                  <Link
                    to={"https://www.minafoundation.com/"}
                    target="_blank"
                    className="w-full h-full"
                  >
                    <img
                      src="/investors/Mina.png"
                      loading="lazy"
                      alt="Mina"
                      className="w-full h-full"
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center basis-1/2 px-2">
                <div className="h-32 w-32 cursor-pointer flex justify-center  items-center px-2 py-2">
                  <Link
                    to={"https://o1labs.org/"}
                    target="_blank"
                    className="w-full h-full"
                    style={{
                      backgroundImage: "url(/investors/O.png)",
                      backgroundSize: "100% 70%",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                    }}
                  ></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-4 px-10 text-xl !font-Metrophobic bg-l1 text-white leading-10">
        <div className="container mx-auto ">
          Lumina shines a new light on decentralized finance for inspired by
          permissioned venues for trading large asset blocks while maintaining
          privacy, compliance and auditability.
        </div>
      </div>
      {/* section4 */}
      <div className="container mx-auto flex flex-col gap-8 text-dark-purple py-10">
        <div className="text-2xl font-bold">Early builders</div>
        <div className="flex flex-row justify-center flex-wrap px-28">
          <div className="flex flex-row basis-1/2">
            <div className="flex flex-col gap-1 basis-1/2 p-4">
              <div className="flex flex-col gap-3 items-center">
                <div
                  className="w-32 h-32 rounded-full border-2 border-primary shadow-md shadow-blue-500/50"
                  style={{
                    backgroundImage: "url(/builders/Evan.jpg)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="">
                  <Link
                    to="https://www.linkedin.com/in/evan-kereiakes/"
                    target="_blank"
                  >
                    Evan Kereiakes
                  </Link>
                  <br />
                  <span className="italic">CEO</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 basis-1/2 p-4">
              <div className="flex flex-col gap-3 items-center">
                <div
                  className="w-32 h-32 rounded-full border-2 border-primary shadow-md shadow-blue-500/50"
                  style={{
                    backgroundImage: "url(/builders/Sebastien.jpg)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="">
                  <Link
                    to="https://www.linkedin.com/in/sebastiengllmt/"
                    target="_blank"
                  >
                    Sebastien Guillemot
                  </Link>
                  <br />
                  <span className="italic">CTO</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row basis-1/2">
            <div className="flex flex-col gap-1 basis-1/2 p-4">
              <div className="flex flex-col gap-3 items-center">
                <div
                  className="w-32 h-32 rounded-full border-2 border-primary shadow-md shadow-blue-500/50"
                  style={{
                    backgroundImage: "url(/builders/Gregory.png)",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className="">
                  <Link
                    to="https://www.linkedin.com/in/greg-peter-santini-524886184/"
                    target="_blank"
                  >
                    Gregory Santini
                  </Link>
                  <br />
                  <span className="italic">Front-End</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-1 basis-1/2 p-4">
              <div className="flex flex-col gap-3 items-center">
                <div
                  className="w-32 h-32 rounded-full border-2 border-primary shadow-md shadow-blue-500/50"
                  style={{
                    backgroundImage: "url(/builders/Kesu.png)",
                    backgroundSize: "180% 108%",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="">
                  <Link
                    to={"https://www.linkedin.com/in/kesujames/"}
                    target="_blank"
                  >
                    Kesu James
                  </Link>
                  <br />
                  <span className="italic">Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section5 */}
      <div
        className="flex flex-col py-10 gap-y-6"
        style={{
          backgroundImage: "url(/background/background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="font-bold text-dark-purple text-3xl font-Verdana">
          Get Involved
        </div>

        <div className="flex flex-row justify-center gap-6 text-dark-purple flex-wrap">
          <div className="flex flex-col gap-y-4 items-center border-2 border-primary shadow-md shadow-blue-500/50 p-5 rounded-lg ">
            <div className="font-bold">Builders & Community</div>
            <div className="text-5xl cursor-pointer">
              <GiWarPick />
            </div>
            <Link to={"https://signupluminadex.netlify.app/"} target="_blank">
              <Button
                shape="round"
                size={"large"}
                className="font-bold bg-l1 text-white border-primary"
              >
                Sign Up
              </Button>
            </Link>
          </div>
          <div className="flex flex-col gap-y-4 items-center border-2 border-primary shadow-md shadow-blue-500/50 p-5 rounded-lg ">
            <div className="font-bold">Investors and Partners</div>
            <div className="text-5xl cursor-pointer">
              <FaHandshake />
            </div>
            <Button
              shape="round"
              size={"large"}
              className="font-bold text-dark-purple border-primary bg-white text-white"
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="text-xl text-dark-purple px-3 !font-Metrophobic">
          “There is always light. If only we’re brave enough to be it.”
          <span className="text-base !font-Metrophobic"> - Amanda Gorman</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
