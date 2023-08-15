import { useEffect, useState } from "react";
import { Button } from "antd";
import { BsCurrencyExchange, BsPenFill } from "react-icons/bs";
import { FaHammer } from "react-icons/fa";
import { MdGeneratingTokens, MdGroups3 } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";

function HomePage() {
  const [windowWidth, setWindowWidth] = useState(1920);
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
  }, []);
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
          <div className="basis-3/5 max-sm:basis-4/5">
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
          <div className="font-bold text-dark-purple text-3xl font-Verdana">
            The future of finance is in plain sight
          </div>
          <div className="text-dark-purple font-bold px-2">
            Lumina is a zero-knowledge, KYC-enabled, enterprise-ready DEX on
            Mina
          </div>
          <div className="flex flex-row gap-x-4 justify-center">
            <Button
              shape="round"
              size={"large"}
              className="font-bold bg-l1 text-white border-primary"
            >
              Sign Up
            </Button>
            <Button
              shape="round"
              size={"large"}
              className="font-bold text-dark-purple border-primary bg-white text-white"
            >
              Litepaper
            </Button>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="pt-8 pb-4">
        <div className="container mx-auto flex flex-col gap-8 text-dark-purple">
          <div className="flex flex-row justify-center flex-wrap w-2/3 mx-auto">
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4 py-2">
              <div className="font-Agrandir-wide text-xl font-bold">
                Clarity
              </div>
              <div className="rounded-full border-2 border-primary p-6 shadow-md shadow-blue-500/50">
                <BsCurrencyExchange className="text-[80px]" />
              </div>
              {windowWidth <= 375 ? (
                <div className="font-Agrandir-wide">
                  zkProofs enable private transactions with verified
                  counterparties
                </div>
              ) : (
                <div className="font-Agrandir-wide">
                  Zero-knowledge proofs enable trustless, private, transactions
                  with verified counterparties without exposing sensitive
                  information
                </div>
              )}
            </div>
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4 py-2">
              <div className="font-Agrandir-wide text-xl font-bold">
                Compliance
              </div>
              <div className="rounded-full border-2 border-primary p-6 shadow-md shadow-blue-500/50">
                <MdGeneratingTokens className="text-[80px]" />
              </div>
              {windowWidth <= 375 ? (
                <div className="font-Agrandir-wide ">
                  Built-in KYC and permissioned liquidity pools
                </div>
              ) : (
                <div className="font-Agrandir-wide ">
                  Built-in KYC, permissioned liquidity pools, and privacy for
                  retail and institutional users in accordance with prevailing
                  regulatory requirements
                </div>
              )}
            </div>
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4 py-2">
              <div className="font-Agrandir-wide text-xl font-bold">
                Confidence
              </div>
              <div className="rounded-full border-2 border-primary p-6 shadow-md shadow-blue-500/50">
                <MdGroups3 className="text-[80px]" />
              </div>
              {windowWidth <= 375 ? (
                <div className="font-Agrandir-wide ">
                  Lumina is the guiding light for TradFi and Web2 DeFi ambitions
                </div>
              ) : (
                <div className="font-Agrandir-wide ">
                  Decentralized exchange needs a guiding light. Our thoughtful
                  approach to decentralized compliance positions DeFi as a clear
                  growth catalyst for TradFi and Web2 companies
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col text-dark-purple pt-8 pb-10">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="text-2xl">
            Backed by the top names in Blockchain and zk!
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap px-28 gap-y-4">
            <div className="basis-1/2 flex flex-row">
              <div className="flex items-center justify-center basis-1/2 px-5">
                <div className="h-32 w-32 flex justify-center  items-center px-2 py-2 rounded-lg border-2 border-primary shadow-md shadow-blue-500/50 ">
                  <Link
                    to={"https://jumpcrypto.com/"}
                    className="w-full h-full"
                  >
                    <img
                      src="/investors/big.png"
                      loading="lazy"
                      alt="big"
                      className="w-full h-full"
                    ></img>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center basis-1/2 px-5 ">
                <div className="h-32 w-32 flex justify-center  items-center px-2 py-2 rounded-lg border-2 border-primary shadow-md shadow-blue-500/50">
                  <Link
                    to={"https://www.bigbrain.holdings/"}
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
              <div className="flex items-center justify-center basis-1/2 px-5 ">
                <div className="h-32 w-32 cursor-pointer flex justify-center  items-center px-2 py-2 rounded-lg border-2 border-primary shadow-md shadow-blue-500/50">
                  <Link
                    to={"https://www.minafoundation.com/"}
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
              <div className="flex items-center justify-center basis-1/2 px-5">
                <div className="h-32 w-32 cursor-pointer flex justify-center  items-center px-2 py-2 rounded-lg border-2 border-primary shadow-md shadow-blue-500/50">
                  <Link to={"https://o1labs.org/"} className="w-full h-full">
                    <img
                      src="/investors/O(1).jpeg"
                      loading="lazy"
                      alt="o1labs"
                      className="w-full h-full"
                    ></img>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 px-10 text-2xl font-Agrandir-wide bg-l1 text-white leading-10">
        Lumina is a new paradigm that brings order out of chaos: presenting
        decentralized finance in a new light for a digital age; inspired by
        permissioned private venues for trading large asset blocks while
        maintaining compliance and auditability.
      </div>
      {/* section4 */}
      <div className="container mx-auto flex flex-col gap-8 text-dark-purple pt-10 pb-8">
        <div className="text-2xl">Early builders</div>
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
                  <Link to="https://www.linkedin.com/in/evan-kereiakes/">
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
                  <Link to="https://www.linkedin.com/in/sebastiengllmt/">
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
                  <Link to="https://www.linkedin.com/in/greg-peter-santini-524886184/">
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
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className="">
                  <Link to={"https://www.linkedin.com/in/kesujames/"}>
                    Kesu James
                  </Link>
                  <br />
                  <span className="italic">Creative</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 mx-auto flex justify-center items-center flex-row max-md:w-3/5">
          <img
            src="/logo/logo3.png"
            loading="lazy"
            alt="lumina"
            className="w-full h-full"
          ></img>
        </div>
      </div>
      {/* section5 */}
      <div
        className="flex flex-col py-10 gap-y-4"
        style={{
          backgroundImage: "url(/background/background.png)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="font-bold text-dark-purple text-3xl font-Verdana">
          Get Involved!
        </div>
        <div className="flex flex-row gap-x-4 justify-center items-center">
          <Link to={"https://telegram.com"}>
            <div className="text-dark-purple text-5xl">
              <FaTelegramPlane />
            </div>
          </Link>
          <Link to={"https://twitter.com"}>
            <div
              className="w-8 h-8"
              style={{
                backgroundImage: "url(/icon/twitter_x.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
          <Link to={"https://medium.com"}>
            <div className="text-dark-purple text-5xl">
              <BiLogoMediumOld />
            </div>
          </Link>
        </div>
        <div className="flex flex-row justify-center gap-x-4 text-dark-purple">
          <div className="flex flex-col gap-y-4 items-center">
            <div className="font-bold">Builders & Community</div>
            <div className="text-5xl cursor-pointer">
              <FaHammer />
            </div>
            <Button
              shape="round"
              size={"large"}
              className="font-bold bg-l1 text-white border-primary"
            >
              Sign Up
            </Button>
          </div>
          <div className="flex flex-col gap-y-4 items-center">
            <div className="font-bold">Investors and Partners</div>
            <div className="text-5xl cursor-pointer">
              <BsPenFill />
            </div>
            <Button
              shape="round"
              size={"large"}
              className="font-bold text-dark-purple border-primary bg-white text-white"
            >
              Email
            </Button>
          </div>
        </div>
        <div className="text-xl text-dark-purple break-words px-3">
          Investors and Partners: email
          <a href="mailto:contact@luminadex.com">contact@luminadex.com</a>
          to join forces
        </div>
        <div className="text-xl text-dark-purple">
          “There is always light. If only we’re brave enough to be it.”
          <span className="text-base"> - Amanda Gorman</span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
