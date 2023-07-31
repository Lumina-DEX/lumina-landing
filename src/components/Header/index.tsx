import React, { useContext, useState } from "react";
import { Logo, MenuItems } from "$constants/menu";
import { Link } from "react-router-dom";
import { Button, Drawer, Dropdown, Menu, Navbar } from "react-daisyui";
const Header = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    setVisible(!visible);
  };

  const drawerSide = (
    <Menu className="p-4 w-40 h-full bg-base-200 text-base-content bg-light-100 font-primary">
      {MenuItems.map((item, index) => (
        <Menu.Item key={index} onClick={toggleVisible}>
          <Link to={item.link} className="font-bold focus:text-black ">
            {item.name}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="fixed top-0 left-0 h-[64px] w-full z-[2] bg-background-l1 shadow-10 px-4">
      <Drawer
        side={drawerSide}
        open={visible}
        onClickOverlay={toggleVisible}
        className="font-sans"
      >
        <Navbar className="custom-nav-bar">
          <div className="flex-none lg:hidden">
            <Button shape="square" color="ghost" onClick={toggleVisible}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </Button>
            <div
              className="font-primary flex-1 px-2 mx-2 text-[38px] font-bold cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              {Logo.title}
            </div>
          </div>
          <div className="flex flex-row w-full justify-between">
            <div
              className="font-primary hidden lg:block px-2 mx-2 text-[38px] font-bold cursor-pointer"
              onClick={() => (window.location.href = "/")}
            >
              <div
                className="w-[180px] h-11"
                style={{
                  backgroundImage: "url(/logo/logo.png)",
                  backgroundSize: "cover",
                }}
              ></div>
            </div>
            <div className="flex-none hidden lg:block ">
              <div className="relative top-2">
                <Menu horizontal={true} className="flex flex-grow gap-6 ">
                  {MenuItems.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="text-black focus:font-bold font-primary text-xl"
                    >
                      {item.name}
                    </Link>
                  ))}
                </Menu>
              </div>
            </div>
          </div>
        </Navbar>
      </Drawer>
    </div>
  );
};

export default Header;
