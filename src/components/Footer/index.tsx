import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-primary py-10">
      <div className="container border-t-2 border-light-200 mx-auto">
        <div className="mt-10 flex flex-col gap-6">
          <div className="flex flex-row gap-4 justify-start items-center">
            <div className="text-light-100 text-3xl">
              <Link to="/"> Lumina </Link>
            </div>
            <div className="text-light-100">|</div>
            <div className="text-light-100"> Privacy</div>
          </div>
          <div className="text-light-100 text-left">
            This website is maintained by the Interchain Foundation (ICF) on
            behalf of the decentralized community. The contents and opinions of
            this website do not necessarily reflect those of the ICF. This
            website links to projects, dApps and cryptocurrency exchanges as a
            service to the public. The ICF does not warrant that the information
            provided by these websites is correct, complete, and up-to-date. The
            ICF is not responsible for the content of those websites and
            expressly rejects any liability for damages of any kind resulting
            from the use, reference to, or reliance on any information contained
            within these websites. If you spot an error or issue on this
            website, please email marketing-[at]-interchain.io
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
