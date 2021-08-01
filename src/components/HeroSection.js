import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <>
      <div className="hero-container">
        {/* <video src="/videos/video-1.mp4" autoPlay loop muted /> */}
        <div className="hero-text">
          <h1>Unleash Your Learning Online.</h1>
          <h4>Learn the In-Demand Skills and land your Dream Job</h4>
          <div className="hero-btns">
            <Button
              className="btns"
              buttonStyle="btn--outline"
              buttonSize="btn--large"
            >
              VIEW PLANS<i class="fas fa-angle-right"></i>
            </Button>
            <Button
              className="btns"
              buttonStyle="btn--primary"
              buttonSize="btn--large"
              onClick={console.log("hey")}
            >
              GET STARTED
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
