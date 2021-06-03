import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
// @ts-ignore
import Zoom from "react-reveal/Zoom";
import welcomePic from "../../assets/WelcomePicture.png";
import welcomePic2 from "../../assets/WelcomePicture2.png";
import welcomePic3 from "../../assets/WelcomePicture3.png";
import TextScramble, { ScrambleTexts } from "@twistezo/react-text-scramble";
import Carousel from "react-bootstrap/Carousel";
import React from "react";

const scrambleTexts: ScrambleTexts = [
  "friend",
  "future employer",
  "future coworker",
];

const Home: React.FC = () => {
  return (
    <div className="body">
      <div className="parallax-wrapper">
        <Zoom>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="center welcome-pic rounded"
                alt="welcome"
                src={welcomePic}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="center welcome-pic rounded"
                alt="welcome2"
                src={welcomePic2}
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="center welcome-pic-wide rounded"
                alt="welcome3"
                src={welcomePic3}
              />
            </Carousel.Item>
          </Carousel>
          <div className="content rounded">
            <div className="welcome-header">
              Welcome&nbsp;
              <TextScramble texts={scrambleTexts} /> !
            </div>
          </div>
        </Zoom>
      </div>
      <div className="regular-wrapper">
        <Zoom top>
          <div className="content rounded">
            <p className="welcome-content">
              My name is Robert Lincoln Truesdale III, but I prefer to go by
              'Tre'. This website showcases my projects, experiences, and me!
            </p>
            <p className="created">
              This website was developed with React + TypeScript
            </p>
          </div>
        </Zoom>
      </div>
      <div className="texas-parallax-wrapper">
        <Zoom>
          <div className="content rounded">
            <p>
              I was born in Fort Worth, Texas and moved to Missouri shortly
              before starting high school. There, I enrolled in a website
              development course at Nichols Career Center, and learned basic
              HTML/CSS, Java, and JavaScript. My partner and I won the districts
              competition for website development, but was unfortunately
              disqualified in state because my partner was absent. Throughout
              this experience, I fell in love with coding and application
              creation. I see application development as the perfect way for me
              to show my artistic talent as well as a way to actually help
              people and make an impact on lives.
            </p>
          </div>
        </Zoom>
      </div>
      <div className="mizzou-wrapper">
        <Zoom>
          <div className="content rounded">
            <p>
              After graduating from Helias High School in Jefferson City,
              Missouri, I attended the University of Missouri - Columbia with a
              goal to graduate with a degree in Computer Science. During this
              time I learned many real world experiences and lessons through
              internships and research roles. I learned the value of teamwork,
              clean code, and development principles. In May of 2021, I
              graduated with a degree in Computer Science, along with two
              projects I helped build from the ground up that is in use by
              different agencies in the state of Missouri today. To see these
              projects and more, visit my Projects page!
            </p>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
