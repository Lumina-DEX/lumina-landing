import React from "react";
import { Button } from "react-daisyui";
import PieChartComponent from "$components/Chart/PieChart";
const labels = ["January", "February", "March", "April", "May", "June"];

function HomePage() {
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(0,0,255)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
    ],
  };

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

        <div className="font-bold text-black text-2xl">
          The future of finance is in plain sight.
        </div>
        <div>
          <Button color="secondary">Sign Up</Button>
        </div>
      </div>
      {/* page2 */}
      <div className="container border border-black  mx-auto mt-10 flex flex-col gap-4 p-10 text-black">
        <div>
          Lumina is a zero-knowledge, KYC-enabled, enterprise-ready DEX on Mina
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-3 items-start">
            <div>Clarity </div>
            <div className="rounded-lg border-2 border-black p-10">Icon 1</div>
            <div>Description 1</div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div>Confidence</div>
            <div className="rounded-lg border-2 border-black p-10">Icon 2</div>
            <div>Description 2</div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <div>Compliance </div>
            <div className="rounded-lg border-2 border-black p-10">Icon 3</div>
            <div>Description 3</div>
          </div>
        </div>
      </div>
      {/* page3 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div>Backed by the top names in Blockchain and zk! (Press release)</div>
        <div className="flex flex-row justify-between">
          <div className="rounded-lg border-2 border-black p-10">
            Jump Crypto
          </div>
          <div className="rounded-lg border-2 border-black p-10">VC Logo</div>
          <div className="rounded-lg border-2 border-black p-10">
            Mina Foundation
          </div>
          <div className="rounded-lg border-2 border-black p-10">O(1) Labs</div>
        </div>
        <div className="py-4 px-10 border-2 border-black">
          Lumina is a new paradigm that brings order out of chaos: presenting
          decentralized finance in a new light for a digital age, inspired by
          permissioned private trading venues allowing institutional investors
          to trade large asset blocks without revealing intent ahead of time
          while maintaining Compliance and Auditability.
        </div>
      </div>
      {/* page4 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div>Collaborating with the best in the industry!</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-4 items-start">
            <div className="border-2 border-black p-10 rounded-lg"> Zeko</div>
            <div>L2 Rollup</div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="border-2 border-black p-10 rounded-lg"> eTonec</div>
            <div>zkKYC</div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="border-2 border-black p-10 rounded-lg"> Kintsu</div>
            <div>Liquid Staking</div>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <div className="border-2 border-black p-10 rounded-lg"> Auro</div>
            <div>Wallet</div>
          </div>
        </div>
      </div>
      {/* page5 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div>
          Sign up for the Journey, and get early updates on the Roadmap!
        </div>
        <div>
          <Button color="secondary">Sign Up</Button>
        </div>
        {/* char1 here */}
        <div></div>
      </div>
      {/* page6 */}
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div>Early builders</div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-1 pr-10">
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
          <div className="flex flex-col gap-1 px-5">
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
          <div className="flex flex-col gap-1 px-5">
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
          <div className="flex flex-col gap-1 pl-10">
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
      <div className="container mx-auto flex flex-col gap-4 mt-10">
        <div className="w-full flex justify-center">
          <div
            className="w-[838px] h-[478px]"
            style={{ backgroundImage: "url(/banner/1.jpg)" }}
          ></div>
        </div>
        <div>The Big Opportunity for Lumina: Migrating TradFi to DeFi</div>
        {/* pipe chart */}
        <div>{/* <PieChartComponent /> */}</div>
      </div>
    </div>
  );
}

export default HomePage;
