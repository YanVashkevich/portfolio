import React, { useState } from "react";
import "./Works.css";
import WebDesign from "../assets/WebDesign";
import Development from "../assets/Development"
import Ilustrations from "../assets/Ilustrations";
import WebPages from "../assets/WebPages";
import SocialMedia from "../assets/SocialMedia";



export const Works = () => {
  const [varient, setVarient] = useState("web design");

  return (
    <div className="works">
      <div className="left">
        <ul className="works-left">
          <div onClick={() => setVarient("web design")} className="wd">
            Web Design
          </div>
          <div onClick={() => setVarient("development")} className="dev">
            Development
          </div>
          <div onClick={() => setVarient("ilustrations")} className="ilu">
            Ilustrations
          </div>
          <div onClick={() => setVarient("web-pages")} className="wp">
            Web-pages
          </div>
          <div onClick={() => setVarient("social media")} className="sm">
            Social media
          </div>
        </ul>
      </div>
      
      <div className="works-right">
        {varient === "web design" ? (
          <WebDesign/>
        ) : varient === "development" ? (
          <Development />
        ) : varient === "ilustrations" ? (
          <Ilustrations />
        ) : varient === "web-pages" ? (
          <WebPages />
        ) : (
          <SocialMedia/>
        )}
      </div>
    </div>
  );
};
