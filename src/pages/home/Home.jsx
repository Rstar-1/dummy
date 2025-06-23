import React, { useEffect, useState } from "react";

const Home = () => {
  const [speedBps, setSpeedBps] = useState(null);
  const [speedKbps, setSpeedKbps] = useState(null);
  const [speedMbps, setSpeedMbps] = useState(null);

  const testSpeed = async () => {
    const imageUrl =
      "https://upload.wikimedia.org/wikipedia/commons/3/3f/Fronalpstock_big.jpg"; // ~5MB image
    const startTime = new Date().getTime();

    try {
      const response = await fetch(imageUrl, { cache: "no-cache" });
      const blob = await response.blob();
      const endTime = new Date().getTime();

      const duration = (endTime - startTime) / 1000; // in seconds
      const bitsLoaded = blob.size * 8;
      const bps = bitsLoaded / duration;
      const kbps = bps / 1024;
      const mbps = kbps / 1024;

      setSpeedBps(bps.toFixed(2));
      setSpeedKbps(kbps.toFixed(2));
      setSpeedMbps(mbps.toFixed(2));
    } catch (error) {
      console.error("Speed test failed:", error);
    }
  };
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  const [batteryLevel, setBatteryLevel] = useState(null);

  const handleCheckBattery = () => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        setBatteryLevel((battery.level * 100).toFixed(0));
      });
    } else {
      alert("Battery API not supported in this browser.");
    }
  };
  return (
    <div className="h-bottom px10">
      <div className="flex w-full gap-12">
        <div className="w-75">
          <div className="flex gap-6">
            <div className="w-60 border-secondary">
              <div className="py10 bordb">
                <h3 className="mid-text text-center textprimary">
                  DEVICE_INFO
                </h3>
              </div>
              <div className="grid-cols-3 gap-12 py20">
                <div>
                  <div className="flex justify-center">
                    <span className="loader"></span>
                  </div>
                  <p className="para-text mtpx16 text-center textprimary">
                    PROJECTS
                  </p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <span className="loader"></span>
                  </div>
                  <p className="para-text mtpx16 text-center textprimary">
                    PLAYERS
                  </p>
                </div>
                <div>
                  <div className="flex justify-center">
                    <span className="loader"></span>
                  </div>
                  <p className="para-text mtpx16 text-center textprimary">
                    STOCKS
                  </p>
                </div>
              </div>
            </div>
            <div className="w-40 border-secondary">
              <div className="py10 bordb">
                <h3 className="mid-text text-center textprimary">
                  SYSTEM_INFO
                </h3>
              </div>
              <div className="">
                <button onClick={testSpeed}>Test Speed</button>
                {speedBps && (
                  <div>
                    <p>
                      <strong>Speed in bps:</strong> {speedBps} bps
                    </p>
                    <p>
                      <strong>Speed in Kbps:</strong> {speedKbps} Kbps
                    </p>
                    <p>
                      <strong>Speed in Mbps:</strong> {speedMbps} Mbps
                    </p>
                  </div>
                )}
                <div id="demo" className="textwhite">
                  You are {isOnline ? "online now" : "offline now"}.
                </div>
                <button onClick={handleCheckBattery}>
                  Check Battery Level
                </button>
                {batteryLevel !== null && <p>Battery Level: {batteryLevel}%</p>}
              </div>
            </div>
          </div>
          <div className="grid-cols-3 w-full gap-12 mtpx10">
            <div className="py90 border-secondary"></div>
            <div className="py90 border-secondary"></div>
            <div className="py90 border-secondary"></div>
          </div>
        </div>
        <div className="w-25">
          <div className="py10 border-secondary">
            <h3 className="head-text text-center textprimary">
              B . A . R . A . S . I . N . G . H . A
            </h3>
          </div>
          <div className="grid-cols-3 gap-6 mtpx10">
            <div className="border-secondary py24">
              <h3 className="head-text text-center textprimary">T_K</h3>
            </div>
            <div className="border-secondary bgprimary py24">
              <h3 className="head-text text-center textsecondary">C_F</h3>
            </div>
            <div className="border-secondary py24">
              <h3 className="head-text text-center textprimary">SLR</h3>
            </div>
            <div className="border-secondary py24">
              <h3 className="head-text text-center textprimary">CTG</h3>
            </div>
            <div className="border-secondary py24">
              <h3 className="head-text text-center textprimary">AS</h3>
            </div>
            <div className="border-secondary py24">
              <h3 className="head-text text-center textprimary">JKE</h3>
            </div>
          </div>
          <div className="border-secondary mtpx10">
            <div className="py10 bordb">
              <h3 className="mid-text text-center textprimary">
                DEVICE / INFO
              </h3>
            </div>
            <div className="h-reminder newscroll px8">
              <div className="border-secondary p8 my8">
                <p className="para-text textprimary">MEETING</p>
                <p className="para-text textforth">
                  Set the loader in gr he loader in g Set the loader in gr he
                  loader in g Set the loader in gr he loader in g Set the loader
                  in gr he loader in g Set the loader in gr he loader in g Set
                  the loader in gr he loader in g
                </p>
              </div>
              <div className="border-secondary p8 my8">
                <p className="para-text textprimary">MEETING</p>
                <p className="para-text textforth">Set the loader in gr</p>
              </div>
              <div className="border-secondary p8 my8">
                <p className="para-text textprimary">MEETING</p>
                <p className="para-text textforth">
                  Set the loader in gr he loader in g Set the loader in gr he
                  loader in g Set the loader in gr he loader in g Set the loader
                  in gr he loader in g Set the loader in gr he loader in g Set
                  the loader in gr he loader in g
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
