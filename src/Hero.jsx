import React from "react";
import Wave from "react-wavify";
import Navbar from "./Navbar";
import MainHero from "./MainHero";

function Hero() {
  return (
    <div>
        <Navbar />
        <MainHero />
      <div
        style={{ position: "relative", overflow: "hidden", height: "55vh" }}
      >
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <Wave
            fill="#fff"
            paused={false}
            style={{ width: "100%", height: "100%" }}
            options={{
              height: 0, // Adjust height as needed
              amplitude: 15,
              speed: 0.15,
              points: 6,
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
