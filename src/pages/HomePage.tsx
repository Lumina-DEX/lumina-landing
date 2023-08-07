import React from "react";
import { Button, Carousel } from "antd";
import { BsCurrencyExchange, BsDot } from "react-icons/bs";
import { MdGeneratingTokens, MdGroups3 } from "react-icons/md";
import PieChartC from "../components/Chart/PieChart";

function HomePage() {
  return (
    <div className="w-full mt-16">
      {/* page1 */}
      <div className="flex flex-col gap-8 justify-center">
        <Carousel autoplay effect="fade">
          <div>
            <div
              className="w-full h-[250px]"
              style={{
                backgroundImage: "url(/banner/banner2.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div>
            <div
              className="w-full h-[250px]"
              style={{
                backgroundImage: "url(/banner/banner1.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div>
            <div
              className="w-full h-[250px]"
              style={{
                backgroundImage: "url(/banner/banner.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
        </Carousel>

        <div className="font-bold text-dark-purple text-3xl font-Verdana">
          The future of finance is in plain sight.
        </div>
        <div>
          <Button
            shape="round"
            size={"large"}
            className="font-bold bg-second text-dark-purple border-primary"
          >
            Sign Up
          </Button>
        </div>
      </div>
      {/* page2 */}
      <div className="container mx-auto mt-16 flex flex-col gap-8 text-dark-purple">
        <div className="text-xs">
          Lumina is a zero-knowledge, KYC-enabled, enterprise-ready DEX on Mina
        </div>
        <div className="flex flex-row justify-center flex-wrap w-2/3 mx-auto">
          <div className="flex items-center basis-1/3 px-5 flex-col gap-4">
            <div className="font-Agrandir-wide">Clarity </div>
            <div className="rounded-full border-2 border-primary p-8 shadow-md shadow-blue-500/50">
              <BsCurrencyExchange className="text-8xl" />
            </div>
            <div className="font-Agrandir-wide">Description 1</div>
          </div>
          <div className="flex items-center basis-1/3 px-5 flex-col gap-4">
            <div className="font-Agrandir-wide"> Clarity </div>
            <div className="rounded-full border-2 border-primary p-8 shadow-md shadow-blue-500/50">
              <MdGeneratingTokens className="text-8xl" />
            </div>
            <div className="font-Agrandir-wide">Description 1</div>
          </div>
          <div className="flex items-center basis-1/3 px-5 flex-col gap-4">
            <div className="font-Agrandir-wide">Clarity </div>
            <div className="rounded-full border-2 border-primary p-8 shadow-md shadow-blue-500/50">
              <MdGroups3 className="text-8xl" />
            </div>
            <div className="font-Agrandir-wide">Description 1</div>
          </div>
        </div>
      </div>
      {/* page3 */}
      <div className="flex flex-col gap-8 mt-16 text-dark-purple bg-l1 py-10">
        <div className="container mx-auto flex flex-col gap-6">
          <div className="text-xs text-light-100">
            Backed by the top names in Blockchain and zk! (Press release)
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap px-28">
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img src="/top/1.svg" loading="lazy" alt=""></img>
              </div>
            </div>
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img src="/top/2.svg" loading="lazy" alt=""></img>
              </div>
            </div>
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img src="/top/3.svg" loading="lazy" alt=""></img>
              </div>
            </div>
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img src="/top/4.svg" loading="lazy" alt=""></img>
              </div>
            </div>
          </div>
          <div className="py-4 px-10 bg-second text-dark-purple text-2xl font-Agrandir-wide ">
            Lumina is a new paradigm that brings order out of chaos: presenting
            decentralized finance in a new light for a digital age, inspired by
            permissioned private trading venues allowing institutional investors
            to trade large asset blocks without revealing intent ahead of time
            while maintaining Compliance and Auditability.
          </div>
        </div>
        {/* page4 */}
        <div className="container mx-auto flex flex-col gap-8 text-dark-purple">
          <div className="text-xs text-light-100">
            Collaborating with the best in the industry!
          </div>
          <div className="flex flex-row justify-center items-center flex-wrap px-28">
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img
                  src="/investors/ascentive-assets.svg"
                  loading="lazy"
                  alt=""
                  className="height-60"
                ></img>
              </div>
            </div>
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img src="/investors/cfund.svg" loading="lazy" alt=""></img>
              </div>
            </div>
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img src="/investors/kronos.svg" loading="lazy" alt=""></img>
              </div>
            </div>
            <div className="flex items-center basis-1/4 px-5">
              <div className="cursor-pointer h-20 flex justify-center mt-4 items-center px-6 py-2 w-44 rounded-lg border-2 border-light-100 shadow-md shadow-blue-500/50">
                <img
                  src="/investors/morning-star.svg"
                  loading="lazy"
                  alt=""
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* page5 */}
      <div className="container mx-auto flex flex-col gap-8 mt-16">
        <div className="text-dark-purple text-xs">
          Sign up for the Journey, and get early updates on the Roadmap!
        </div>
        <div>
          <Button
            shape="round"
            size={"large"}
            className="font-bold bg-second text-dark-purple border-primary"
          >
            Sign Up
          </Button>
        </div>
        {/* char1 here */}
        <div></div>
      </div>

      {/* page6 */}
      <div className="container mx-auto flex flex-col gap-8 mt-16 text-dark-purple">
        <div className="text-xs">
          The Big Opportunity for Lumina: Migrating TradFi to DeFi
        </div>
        <div className="flex justify-center">
          <PieChartC />
        </div>
      </div>
      {/* page7 */}
      <div className="container mx-auto flex flex-col gap-8 mt-16 text-dark-purple">
        <div className="text-xs">Early builders</div>
        <div className="flex flex-row justify-center flex-wrap">
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-1">
              <p className="flex items-center justify-center">
                <BsDot />
                Node, Ubeswap, Celo, Terra
              </p>
              <p className="flex items-center justify-center">
                <BsDot />
                FRBNY, Treasury, White House, BofA
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-1">
              <p className="flex items-center justify-center">
                <BsDot />
                Node, Ubeswap, Celo, Terra
              </p>
              <p className="flex items-center justify-center">
                <BsDot />
                FRBNY, Treasury, White House, BofA
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-1">
              <p className="flex items-center justify-center">
                <BsDot />
                Node, Ubeswap, Celo, Terra
              </p>
              <p className="flex items-center justify-center">
                <BsDot />
                FRBNY, Treasury, White House, BofA
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4 p-4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="flex justify-center flex-col gap-1">
              <p className="flex items-center justify-center">
                <BsDot />
                Node, Ubeswap, Celo, Terra
              </p>
              <p className="flex items-center justify-center">
                <BsDot />
                FRBNY, Treasury, White House, BofA
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* page8 */}
      <div className="container mx-auto flex flex-col gap-8 mt-16 text-dark-purple mb-10">
        <div className="text-xs">The Technology Stack</div>
        <div className="text-center text-2xl font-Agrandir-wide">
          Permissionless and Permissioned Markets
        </div>
        <div className="flex justify-center">
          <img src="/1/2.jpg" loading="lazy" alt=""></img>
        </div>
        <div className="text-center text-2xl font-Agrandir-wide">
          Privacy and MEV Resistance
        </div>
        <div className="flex justify-center">
          <img src="/1/1.jpg" loading="lazy" alt=""></img>
        </div>
        <div className="text-center text-2xl font-Agrandir-wide">
          Scaling with zk-Rollups
        </div>
        <div className="flex justify-center">
          <img src="/1/3.jpg" loading="lazy" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
