import React from "react";
import { Button } from "antd";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdGeneratingTokens, MdGroups3 } from "react-icons/md";
import { Link } from "react-router-dom";

function HomePage() {
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
          <div className="basis-3/5">
            <img
              src="/logo/logo2.png"
              loading="lazy"
              alt="lumina"
              className="w-full h-full"
            ></img>
          </div>
        </div>
        <div
          className="py-10 flex flex-col gap-4"
          style={{
            backgroundImage: "url(/background/background.png)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="font-bold text-dark-purple text-3xl font-Verdana">
            The future of finance is in plain sight.
          </div>
          <div className="text-dark-purple font-bold">
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
              className="font-bold bg-second text-dark-purple border-primary bg-l1 text-white"
            >
              Litepaper
            </Button>
          </div>
        </div>
      </div>
      {/* section2 */}
      <div className="bg-second py-10">
        <div className="container mx-auto flex flex-col gap-8 text-dark-purple">
          <div className="flex flex-row justify-center flex-wrap w-2/3 mx-auto">
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4">
              <div className="font-Agrandir-wide text-xl">Clarity </div>
              <div className="rounded-full border-2 border-primary p-8 shadow-md shadow-blue-500/50">
                <BsCurrencyExchange className="text-8xl" />
              </div>
              <div className="font-Agrandir-wide">Description 1</div>
            </div>
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4">
              <div className="font-Agrandir-wide text-xl"> Clarity </div>
              <div className="rounded-full border-2 border-primary p-8 shadow-md shadow-blue-500/50">
                <MdGeneratingTokens className="text-8xl" />
              </div>
              <div className="font-Agrandir-wide ">Description 1</div>
            </div>
            <div className="flex items-center basis-1/3 px-5 flex-col gap-4">
              <div className="font-Agrandir-wide text-xl">Clarity </div>
              <div className="rounded-full border-2 border-primary p-8 shadow-md shadow-blue-500/50">
                <MdGroups3 className="text-8xl" />
              </div>
              <div className="font-Agrandir-wide ">Description 1</div>
            </div>
          </div>
        </div>
      </div>

      {/* section3 */}
      <div className="flex flex-col text-dark-purple bg-l1 py-8">
        <div className="container mx-auto flex flex-col gap-8">
          <div className="text-2xl text-light-100">
            Backed by the top names in Blockchain and zk!
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap px-28 gap-y-4">
            <div className="flex items-center justify-center basis-1/4 px-5">
              <div className="h-20 flex justify-center  items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <Link to={"https://jumpcrypto.com/"} className="w-full h-full">
                  <img
                    src="/investors/big.png"
                    loading="lazy"
                    alt="big"
                    className="w-full h-full"
                  ></img>
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center basis-1/4 px-5">
              <div className="h-20 flex justify-center  items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
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
            <div className="flex items-center justify-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center  items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
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
            <div className="flex items-center justify-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center  items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
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
          <div>
            <Button
              shape="round"
              size={"large"}
              className="font-bold bg-white text-dark-purple border-primary"
            >
              Sign Up
            </Button>
          </div>
        </div>
      </div>
      <div className="py-4 px-10 text-dark-purple text-2xl font-Agrandir-wide ">
        Lumina is a new paradigm that brings order out of chaos: presenting
        decentralized finance in a new light for a digital age; inspired by
        permissioned private venues for trading large asset blocks while
        maintaining compliance and auditability.
      </div>
      {/* section4 */}
      <div className="container mx-auto flex flex-col gap-8 text-dark-purple">
        <div className="text-2xl">Early builders</div>
        <div className="flex flex-row justify-center flex-wrap">
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div
                className="w-32 h-32 rounded-full"
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
                <span>CEO</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div
                className="w-32 h-32 rounded-full"
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
                <span>CTO</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div
                className="w-32 h-32 rounded-full"
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
                <span>Front-End</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div
                className="w-32 h-32 rounded-full"
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
                <span>Creative</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* section5 */}
      <div className="flex flex-col gap-y-4">
        <div className="container mx-auto">
          <div
            className="w-3/5 mx-auto flex justify-center items-center flex-row py-16 max-sm:py-10"
            style={{
              backgroundImage: "linear-gradient(#351c75, #1D133C)",
            }}
          >
            <div className="basis-3/4">
              <img
                src="/logo/logo2.png"
                loading="lazy"
                alt="lumina"
                className="w-full h-full"
              ></img>
            </div>
          </div>
        </div>

        <div className="text-2xl text-dark-purple">
          “There is always light. If only we’re brave enough to be it.”
          <br />- Amanda Gorman
        </div>
        <div className="border border-primary bg-second text-2xl text-dark-purple py-4 break-words">
          Investors and Partners: email
          <Link to={"contact@luminadex.com"} className="text-teal-400">
            contact@luminadex.com
          </Link>
          to join forces
        </div>
      </div>
    </div>
  );
}

export default HomePage;
