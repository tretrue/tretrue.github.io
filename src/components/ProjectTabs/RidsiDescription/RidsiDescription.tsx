import React from "react";
import "./RisdsiDescription.css";
//@ts-ignore
import Fade from "react-reveal/Fade";
import RIDSILogo from "../../../assets/RIDSI-Logo.png";
import Button from "react-bootstrap/Button";

const RidsiDescription: React.FC = () => {
  return (
    <Fade>
      <div className="ridsi-container">
        <div className="logo">
          <img src={RIDSILogo} alt="RIDSI LOGO" width={400} height={267} />
        </div>
        <div className="iframe-container">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YKLUc7jwhJA?controls=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <div className="description">
          <p>
            RIDSI stands for The Regional Intelligent Transportation System Data
            Sharing Initiative. RIDSI is the central source and delivery point
            for historical and active event/transportation information. RIDSI
            leverages big data analytics to host a data warehouse that collects
            raw information from critical transportation partners, normalizes
            the information into a consistent format, and supports archive and
            delivery of the information back to the contributing partners and
            other approved agencies. From this central source, an agency, firm,
            or regional partner can review, download, or develop their own
            analysis of traffic from around the state. The project’s focus is to
            allow regional transportation data information be more widely
            available and used as a resource to support planning, decision
            making, operations management, and incident response.
          </p>
          <p>
            This application was developed with Ionic and React written in
            TypeScript, and the backend was developed with Python. This
            application utilizes Amazon FireBase and FireStore Real Time
            Database for manipulating data.
          </p>
          <p>
            Unfortunately, this website is now unavailable to the public and is
            to be used by official affiliated organizations only. Please refer
            to the video provided for a short demo, and the article provided for
            more information.
          </p>
        </div>
        <div className="buttons">
          <Button href="https://github.com/MizzouRIDSI">View On Github</Button>
          <Button href="https://ridsi-dash.com" className="button-space">
            Visit Official Site
          </Button>
          <Button href="https://engineering.missouri.edu/2021/05/computer-science-students-create-ridsi-website-to-help-track-traffic/">
            View Article
          </Button>
        </div>
      </div>
    </Fade>
  );
};
export default RidsiDescription;
