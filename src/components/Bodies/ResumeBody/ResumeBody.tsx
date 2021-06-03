import React, { useEffect, useState } from "react";
import "./ResumeBody.css";
import Resume from "../../../assets/Resume.png";
import Button from "react-bootstrap/Button";
import ResumePDF from "../../../assets/RobertTruesdaleResume.pdf";

function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

function LoadingButton() {
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading}
      onClick={!isLoading ? handleClick : null}
      href={ResumePDF}
      download
    >
      {isLoading ? "Loading…" : "Click to Download"}
    </Button>
  );
}

const ResumeBody: React.FC = () => {
  return (
    <>
      <div className="resume-img-container">
        <img src={Resume} alt={"resume"} className="resume-img" />
      </div>
      <div className="resume-btn-container">
        <LoadingButton />
      </div>
    </>
  );
};

export default ResumeBody;
