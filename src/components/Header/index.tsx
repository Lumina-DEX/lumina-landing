import React, { useState } from "react";
import { Drawer } from "antd";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import { SlClose } from "react-icons/sl";

const Header = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const leftMenu = () => (
    <Drawer
      className="left-menu"
      title=""
      placement={"right"}
      closable={false}
      onClose={onClose}
      open={open}
      key={"left"}
    >
      <div className="flex flex-col h-full justify-between items-center">
        <div className="flex flex-col gap-4 items-center">
          <Link to={"https://telegram.com"} onClick={onClose} target="_blank">
            <div className="text-white text-3xl">
              <FaTelegramPlane />
            </div>
          </Link>
          <Link to={"https://twitter.com"} onClick={onClose} target="_blank">
            <div
              className="w-6 h-6"
              style={{
                backgroundImage: "url(/icon/twitter_x.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
          <Link to={"https://medium.com"} onClick={onClose} target="_blank">
            <div className="text-white text-3xl">
              <BiLogoMediumOld />
            </div>
          </Link>
        </div>
        <div onClick={onClose} className="text-white text-3xl">
          <SlClose />
        </div>
      </div>
    </Drawer>
  );

  return (
    <div className="fixed top-0 left-0 h-[64px] w-full z-[2] bg-l1 shadow-10 px-8 max-sm:px-4">
      <div className="flex w-full justify-between h-full items-center">
        <div
          className="w-12 h-11 cursor-pointer max-md:hidden"
          style={{
            backgroundImage: "url(/logo/logo.png)",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
          onClick={() => (window.location.href = "/")}
        ></div>
        <div
          onClick={showDrawer}
          className="w-full max-[1980px]:hidden max-md:flex justify-end"
        >
          <div
            className="w-10 h-9 cursor-pointer"
            style={{
              backgroundImage: "url(/logo/logo.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {leftMenu()}
        <div className="flex flex-row gap-4 text-lg items-center max-md:hidden">
          <Link to={"https://telegram.com"} onClick={onClose} target="_blank">
            <div className="text-white text-3xl">
              <FaTelegramPlane />
            </div>
          </Link>
          <Link to={"https://twitter.com"} onClick={onClose} target="_blank">
            <div
              className="w-6 h-6"
              style={{
                backgroundImage: "url(/icon/twitter_x.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
          <Link to={"https://medium.com"} onClick={onClose} target="_blank">
            <div className="text-white text-3xl">
              <BiLogoMediumOld />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
