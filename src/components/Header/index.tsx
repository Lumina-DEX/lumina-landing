import React, { useContext, useState } from "react";
import { Button } from "antd";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 h-[64px] w-full z-[2] bg-l1 shadow-10 px-8">
      <div className="flex w-full justify-between h-full items-center">
        <div
          className="w-[180px] h-11 cursor-pointer"
          style={{
            backgroundImage: "url(/logo/logo.png)",
            backgroundSize: "cover",
          }}
          onClick={() => (window.location.href = "/")}
        ></div>
        <div className="flex flex-row gap-4 text-lg">
          <Button type="primary" ghost>
            <Link to={"/Ltepaper"}>Ltepaper</Link>
          </Button>
          <Button type="primary" ghost>
            <Link to={"/Twitter"}>Twitter</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
