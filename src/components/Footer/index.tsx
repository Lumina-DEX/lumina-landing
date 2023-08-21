import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-l1 py-5">
      <div className="container border-t-2 border-primary mx-auto text-primary text-white px-28 max-lg:px-4">
        <div className=" flex flex-row flex-wrap items-center justify-between">
          <div className="flex flex-row gap-4 justify-start items-center max-[425px]:justify-center w-72 max-[425px]:w-full">
            <div className="flex items-center text-xl flex-row gap-3">
              <Link to={"https://lumina/terms-of-service"} target="_blank">
                ICF disclaimer
              </Link>
              |
              <Link to={"https://lumina/privacy-policy"} target="_blank">
                Privacy
              </Link>
            </div>
          </div>
          <div className="flex justify-start max-[425px]:justify-center max-[425px]:w-full">
            @2023 copyright Lumina Labs Inc
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
