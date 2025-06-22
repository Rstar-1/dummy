import React from "react";

const Navbar = () => {
  return (
    <div className="h-up flex items-center">
      <div className="px10 flex items-center w-full justify-between">
        <div className="w-20">
          <h1 className="head-text border-secondary w-max px10 py2 textprimary">BARASINGHA</h1>
        </div>
        <div className="flex items-center justify-center w-60">
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <p className="border-secondary para-text textprimary py2 px10">
            STOCKS
          </p>
          <p className="border-secondary para-text textprimary py2 px10">
            PROJECTS
          </p>
          <p className="border-secondary para-text textprimary py2 px10">
            PLAYERS
          </p>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
          <div className="border-secondary py2 px20"></div>
        </div>
        <div className="flex items-center justify-end w-20">
          <p className="border-secondary para-text textprimary py2 px10">IMG</p>
          <p className="border-secondary para-text textprimary py2 px10">
            95 %
          </p>
          <p className="border-secondary para-text textprimary py2 px10">
            WIFI
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
