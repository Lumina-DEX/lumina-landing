import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary pb-6">
      <div className="container border-t-2 border-primary mx-auto text-primary text-dark-purple">
        <div className="py-5 flex flex-col gap-6 max-sm:px-6">
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="flex items-center text-xl flex-row gap-3">
              <Link to="/"> ICF disclaimer </Link> | Privacy
            </div>
          </div>
        </div>
        <div className="text-center">@2023 copyright Lumina Labs Inc</div>
      </div>
    </div>
  );
};

export default Footer;
