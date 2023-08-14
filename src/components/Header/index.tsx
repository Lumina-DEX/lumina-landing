import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { FaTelegramPlane } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";

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
      placement={"left"}
      closable={false}
      onClose={onClose}
      open={open}
      key={"left"}
    >
      <div className="flex flex-col gap-4 items-center">
        <Link to={"/Telegram"} onClick={onClose}>
          <Button className="w-28 text-center !bg-white border-primary ">
            <p className="text-dark-purple font-bold">Telegram</p>
          </Button>
        </Link>
        <Link to={"/Twitter"} onClick={onClose}>
          <Button className="w-28 text-center !bg-white border-primary">
            <p className="text-dark-purple font-bold">Twitter</p>
          </Button>
        </Link>
        <Link to={"/Medium"} onClick={onClose}>
          <Button className="w-28 text-center !bg-white border-primary">
            <p className="text-dark-purple font-bold">Medium</p>
          </Button>
        </Link>
      </div>
    </Drawer>
  );

  return (
    <div className="fixed top-0 left-0 h-[64px] w-full z-[2] bg-l1 shadow-10 px-8">
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
            className="w-12 h-11 cursor-pointer"
            style={{
              backgroundImage: "url(/logo/logo.png)",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          ></div>
        </div>

        {leftMenu()}
        <div className="flex flex-row gap-4 text-lg items-center max-md:hidden">
          <Link to={"/Telegram"}>
            <div className="text-white text-3xl">
              <FaTelegramPlane />
            </div>
          </Link>
          <Link to={"/Twitter"}>
            <div
              className="w-6 h-6"
              style={{
                backgroundImage: "url(/icon/twitter_x.png)",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
          </Link>
          <Link to={"/Medium"}>
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
