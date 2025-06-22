import React from "react";

const Home = () => {
  return (
    <div className="h-bottom px10">
      <div className="flex w-full gap-12">
        <div className="w-75">
          <div className="py100 border-secondary">
          </div>
          <div className="grid-cols-3 w-full gap-12 mtpx10">
            <div className="py100 border-secondary"></div>
            <div className="py100 border-secondary"></div>
            <div className="py100 border-secondary"></div>
          </div>
        </div>
        <div className="w-25">
          <div className="py20 border-secondary"></div>
          <div className="py100 border-secondary mtpx10"></div>
          <div className="py100 border-secondary mtpx10"></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
