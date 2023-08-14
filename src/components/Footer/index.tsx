import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary py-6">
      <div className="container border-t-2 border-primary mx-auto text-primary text-dark-purple">
        <div className="mt-10 flex flex-col gap-6 max-sm:px-6">
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="flex items-center text-3xl flex-row gap-3">
              <Link to="/"> ICF disclaimer </Link> |{" "}
              <span className="text-xl"> Privacy </span>
            </div>
          </div>
        </div>
        <div className="text-xl text-dark-purple py-4 break-words">
          Investors and Partners: email
          <a className="text-teal-400" href="mailto:contact@luminadex.com">
            contact@luminadex.com
          </a>
          to join forces
        </div>
        <div className="text-center">@2023 copyright Lumina Labs Inc</div>
      </div>
    </div>
  );
};

export default Footer;
