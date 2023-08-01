import React from "react";
import { Button, Carousel } from "antd";
import { Pie } from "@ant-design/charts";
import { BsCurrencyExchange } from "react-icons/bs";
import { MdGeneratingTokens, MdGroups3 } from "react-icons/md";

type DataType = "new" | "evaluating" | "ongoing" | "finished" | "archived";

interface PieChartData {
  type: DataType;
  value: number;
}

const pieChartData: PieChartData[] = [
  {
    type: "new",
    value: 40,
  },
  {
    type: "evaluating",
    value: 25,
  },
  {
    type: "ongoing",
    value: 22,
  },
  {
    type: "finished",
    value: 22,
  },
  {
    type: "archived",
    value: 10,
  },
];

const config = {
  appendPadding: 10,
  data: pieChartData,
  angleField: "value",
  colorField: "type",
  radius: 1,
  innerRadius: 0.5,
  label: {
    type: "inner",
    offset: "-50%",
    content: "{value}",
    style: {
      textAlign: "center",
      fontSize: 14,
    },
  },
  interactions: [{ type: "element-selected" }, { type: "element-active" }],
  statistic: {
    title: false as const,
    content: {
      style: {
        whiteSpace: "pre-wrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
      formatter: function formatter() {
        return `total\n134`;
      },
    },
  },
};

function HomePage() {
  return (
    <div className="w-full mt-16">
      {/* page1 */}
      <div className="flex flex-col gap-4 justify-center">
        <Carousel autoplay effect="fade">
          <div>
            <div
              className="w-full h-[500px]"
              style={{
                backgroundImage: "url(/banner/banner2.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div>
            <div
              className="w-full h-[500px]"
              style={{
                backgroundImage: "url(/banner/banner1.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
          <div>
            <div
              className="w-full h-[500px]"
              style={{
                backgroundImage: "url(/banner/banner.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "100% 100%",
              }}
            ></div>
          </div>
        </Carousel>

        <div className="font-bold text-light-100 text-6xl">
          The future of finance is in plain sight.
        </div>
        <div>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            danger
            className="font-bold"
          >
            Sign Up
          </Button>
        </div>
      </div>
      {/* page2 */}
      <div className="container mx-auto mt-10 flex flex-col gap-4 text-light-100">
        <div className="text-4xl">
          Lumina is a zero-knowledge, KYC-enabled, enterprise-ready DEX on Mina
        </div>
        <div className="flex flex-row justify-center flex-wrap">
          <div className="flex flex-col gap-3 items-center basis-1/3 px-5">
            <div>Clarity </div>
            <div className="rounded-full border-2 border-light-200 p-8 shadow-md shadow-blue-500/50">
              <BsCurrencyExchange className="text-8xl" />
            </div>
            <div>Description 1</div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/3 px-5">
            <div>Clarity </div>
            <div className="rounded-full border-2 border-light-200 p-8 shadow-md shadow-blue-500/50">
              <MdGeneratingTokens className="text-8xl" />
            </div>
            <div>Description 1</div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/3 px-5">
            <div>Clarity </div>
            <div className="rounded-full border-2 border-light-200 p-8 shadow-md shadow-blue-500/50">
              <MdGroups3 className="text-8xl" />
            </div>
            <div>Description 1</div>
          </div>
        </div>
      </div>
      {/* page3 */}
      <div className="container mx-auto flex flex-col gap-6 mt-10 text-light-100">
        <div className="text-4xl">
          Backed by the top names in Blockchain and zk! (Press release)
        </div>
        <div className="flex flex-row justify-center items-center flex-wrap">
          <div className="flex flex-col gap-3 items-center basis-1/4 px-5">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/1.svg" loading="lazy" alt=""></img>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/4 px-5">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/2.svg" loading="lazy" alt=""></img>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/4 px-5">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/3.svg" loading="lazy" alt=""></img>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/4 px-5">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/4.svg" loading="lazy" alt=""></img>
            </div>
          </div>
        </div>
        <div className="py-4 px-10 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 text-2xl">
          Lumina is a new paradigm that brings order out of chaos: presenting
          decentralized finance in a new light for a digital age, inspired by
          permissioned private trading venues allowing institutional investors
          to trade large asset blocks without revealing intent ahead of time
          while maintaining Compliance and Auditability.
        </div>
      </div>
      {/* page4 */}
      <div className="container mx-auto flex flex-col gap-6 mt-10 text-light-100">
        <div className="text-4xl">
          Collaborating with the best in the industry!
        </div>
        <div className="flex flex-row justify-between">
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/ascentive-assets.svg"
              loading="lazy"
              className="h-11"
              alt="ascentive-assets"
            ></img>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/cfund.svg"
              loading="lazy"
              className="h-11"
              alt="cfund"
            ></img>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/kronos.svg"
              loading="lazy"
              className="h-11"
              alt="kronos"
            ></img>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/morning-star.svg"
              loading="lazy"
              className="h-11"
              alt="morning-star"
            ></img>
          </div>
        </div>
      </div>
      {/* page5 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div className="text-light-100 text-4xl">
          Sign up for the Journey, and get early updates on the Roadmap!
        </div>
        <div>
          <Button
            type="primary"
            shape="round"
            size={"large"}
            danger
            className="font-bold"
          >
            Sign Up
          </Button>
        </div>
        {/* char1 here */}
        <div></div>
      </div>
      {/* page6 */}
      <div className="container mx-auto flex flex-col gap-6 mt-10 text-light-100">
        <div className="text-4xl">Early builders</div>
        <div className="flex flex-row justify-center flex-wrap">
          <div className="flex flex-col gap-1 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="text-center">
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="text-center">
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="text-center">
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div className="text-center">
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* page7 */}
      <div className="container mx-auto flex flex-col gap-6 mt-10 text-light-100">
        <div className="text-4xl">
          The Big Opportunity for Lumina: Migrating TradFi to DeFi
        </div>
        <div>
          <Pie {...config} />
        </div>
      </div>
      {/* page8 */}
      <div className="container mx-auto flex flex-col gap-6 mt-10 text-light-100 mb-10">
        <div className="text-4xl">The Technology Stack</div>
        <div className="text-left text-2xl">
          Permissionless and Permissioned Markets
        </div>
        <div className="flex justify-center">
          <img src="/1/2.jpg" loading="lazy" alt=""></img>
        </div>
        <div className="text-left text-2xl">Privacy and MEV Resistance</div>
        <div className="flex justify-center">
          <img src="/1/1.jpg" loading="lazy" alt=""></img>
        </div>
        <div className="text-left text-2xl">Scaling with zk-Rollups</div>
        <div className="flex justify-center">
          <img src="/1/3.jpg" loading="lazy" alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
