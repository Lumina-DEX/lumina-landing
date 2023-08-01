import React from "react";
import { Button } from "antd";
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
        <div className="w-full flex justify-center">
          <div
            className="w-[838px] h-[478px]"
            style={{ backgroundImage: "url(/banner/1.jpg)" }}
          ></div>
        </div>

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
      <div className="container mx-auto mt-10 flex flex-col gap-4 p-10 text-light-100">
        <div className="text-3xl">
          Lumina is a zero-knowledge, KYC-enabled, enterprise-ready DEX on Mina
        </div>
        <div className="flex flex-row justify-between flex-wrap">
          <div className="flex flex-col gap-3 items-center basis-1/3">
            <div>Clarity </div>
            <div className="rounded-full border-2 border-light-200 p-8 shadow-md shadow-blue-500/50">
              <BsCurrencyExchange className="text-8xl" />
            </div>
            <div>Description 1</div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/3">
            <div>Clarity </div>
            <div className="rounded-full border-2 border-light-200 p-8 shadow-md shadow-blue-500/50">
              <MdGeneratingTokens className="text-8xl" />
            </div>
            <div>Description 1</div>
          </div>
          <div className="flex flex-col gap-3 items-center basis-1/3">
            <div>Clarity </div>
            <div className="rounded-full border-2 border-light-200 p-8 shadow-md shadow-blue-500/50">
              <MdGroups3 className="text-8xl" />
            </div>
            <div>Description 1</div>
          </div>
        </div>
      </div>
      {/* page3 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10 text-light-100">
        <div className="text-3xl">
          Backed by the top names in Blockchain and zk! (Press release)
        </div>
        <div className="flex flex-row justify-between items-center flex-wrap">
          <div className="basis-1/4 px-16">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/1.svg" loading="lazy"></img>
            </div>
          </div>
          <div className="basis-1/4 px-16">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/2.svg" loading="lazy"></img>
            </div>
          </div>
          <div className="basis-1/4 px-16">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/3.svg" loading="lazy"></img>
            </div>
          </div>
          <div className="basis-1/4 px-16">
            <div className="cursor-pointer h-20 flex justify-center items-center p-8 rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50">
              <img src="/top/4.svg" loading="lazy"></img>
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
      <div className="container mx-auto flex flex-col gap-4 mt-10 text-light-100">
        <div className="text-3xl">
          Collaborating with the best in the industry!
        </div>
        <div className="flex flex-row justify-between">
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/ascentive-assets.svg"
              loading="lazy"
              className="h-11"
            ></img>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/cfund.svg"
              loading="lazy"
              className="h-11"
            ></img>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/kronos.svg"
              loading="lazy"
              className="h-11"
            ></img>
          </div>
          <div className="cursor-pointer rounded-lg border-2 border-light-200 shadow-md shadow-blue-500/50 p-5 h-20">
            <img
              src="/investors/morning-star.svg"
              loading="lazy"
              className="h-11"
            ></img>
          </div>
        </div>
      </div>
      {/* page5 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div className="text-light-100 text-3xl">
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
      <div className="container mx-auto flex flex-col gap-4 mt-10 text-light-100">
        <div className="text-4xl">Early builders</div>
        <div className="flex flex-row justify-between flex-wrap">
          <div className="flex flex-col gap-1 pr-10 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div>
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-5 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div>
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 px-5 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div>
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-1 pl-10 basis-1/4">
            <div className="flex flex-col gap-3 items-center">
              <div className="w-32 h-32 rounded-full bg-light-200"></div>
              <div className="">
                <span>Evan Kereiakes</span> <br />
                <span>CEO,DB</span>
              </div>
            </div>
            <div>
              <ul className="list-disc">
                <li>Node, Ubeswap, Celo, Terra</li>
                <li>FRBNY, Treasury, White House, BofA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* page7 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10 text-light-100">
        <div className="text-3xl">
          The Big Opportunity for Lumina: Migrating TradFi to DeFi
        </div>
        <div>
          <Pie {...config} />
        </div>
        <div className="w-full flex justify-center">
          <div
            className="w-[838px] h-[478px]"
            style={{ backgroundImage: "url(/banner/1.jpg)" }}
          ></div>
        </div>
        {/* pipe chart */}
        <div>{/* <PieChartComponent /> */}</div>
      </div>
    </div>
  );
}

export default HomePage;
