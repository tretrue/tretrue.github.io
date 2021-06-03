import React from "react";
import AugurLogo from "../../../assets/Augur-Logo.png";
import "./AugurDescription.css";
//@ts-ignore
import Fade from "react-reveal/Fade";

const AugurDescription: React.FC = () => {
  return (
    <Fade>
      <div className="augur-container">
        <div className="logo">
          <img src={AugurLogo} alt="Augur Logo" width={450} height={267} />
        </div>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/ZHPGdEJzrCE?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </Fade>
  );
};
export default AugurDescription;
