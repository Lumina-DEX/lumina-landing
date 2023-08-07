import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
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
        <Link to={"/Ltepaper"} onClick={onClose}>
          <Button type="primary" ghost className="w-24 text-center">
            Ltepaper
          </Button>
        </Link>
        <Link to={"/Twitter"} onClick={onClose}>
          <Button type="primary" ghost className="w-24 text-center">
            Twitter
          </Button>
        </Link>
        <Link to={"/Telegram"} onClick={onClose}>
          <Button type="primary" ghost className="w-24 text-center">
            Telegram
          </Button>
        </Link>
        <Link to={"/Medium"} onClick={onClose}>
          <Button type="primary" ghost className="w-24 text-center">
            Medium
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
          className="max-md:block max-[1980px]:hidden text-white "
        >
          <GiHamburgerMenu />
        </div>
        {leftMenu()}
        <div className="flex flex-row gap-4 text-lg max-md:hidden">
          <Link to={"/Ltepaper"}>
            <Button type="primary" ghost className="menu-btn">
              Ltepaper
            </Button>
          </Link>
          <Link to={"/Twitter"}>
            <Button type="primary" ghost className="menu-btn">
              Twitter
            </Button>
          </Link>
          <Link to={"/Telegram"}>
            <Button type="primary" ghost className="menu-btn">
              Telegram
            </Button>
          </Link>
          <Link to={"/Medium"}>
            <Button type="primary" ghost className="menu-btn">
              Medium
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
