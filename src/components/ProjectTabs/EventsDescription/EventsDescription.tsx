import React from "react";
import EventsLogo from "../../../assets/Bicentennial-Logo.png";
import "./EventsDescription.css";
//@ts-ignore
import Fade from "react-reveal/Fade";

const EventsDescription: React.FC = () => {
  return (
    <Fade>
      <div className="events-container">
        <div className="logo">
          <img src={EventsLogo} alt="Events Logo" width={400} height={267} />
        </div>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/2_OaL7eQPSU?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </Fade>
  );
};
export default EventsDescription;
