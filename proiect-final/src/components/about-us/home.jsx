import "./home.css";
import myImage1 from "../pics/img21.png";
import myImage2 from "../pics/img8.jpg";
import myImage3 from "../pics/img11.jpg";
import myImage4 from "../pics/aboutme.jpeg";
import myImage5 from "../pics/img8.jpg";

const HomePage = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <TravelInfoSection />
      <MeetTheGuides />
    </div>
  );
};

const Header = () => {
  return (
    <header className="headerHomePage">
      <div className="contentHeader">
        <span className="logoHeader">TRAVEL WITH UKIYO</span> <br />
        <br />
        <span className="textHeader">
          EXPLORE THE WORLD WITH YOUR PERSONAL GUIDE
        </span>
      </div>
      <img src={myImage1} className="header-image" alt="Travel" />
    </header>
  );
};

const AboutSection = () => {
  return (
    <section id="aboutAboutSection" className="about-section">
      <div className="contentAboutSection">
        <div className="imageAboutSection">
          <img src={myImage2} className="about-image" />
        </div>
        <div className="textAboutSection">
          <h2>About Travel with ukiyo</h2>
          <p>
            Welcome to Travel with ukiyo, your go-to travel guide for unique and
            personalized travel experiences. Our mission is to help you discover
            the worlds hidden gems and create unforgettable memories.
          </p>
          <p>
            With years of experience and a passion for adventure, we offer
            tailored travel plans that cater to your interests and preferences.
            Join us on a journey to explore the unknown and enjoy a seamless
            travel experience.
          </p>
      
          <p>
            In Japanese, ukiyo (浮世) traditionally means floating world. The
            concept of ukiyo reflects a focus on enjoying the fleeting,
            transient pleasures of life, often in contrast to the more somber
            Buddhist idea of -suffering world- or -transitory world-.
          </p>
        </div>
      </div>
    </section>
  );
};

const TravelInfoSection = () => {
  return (
    <section id="travel-info" className="travel-info-section">
      <div className="contentTravelInfoSection">
        <div className="textTravelInfoSection">
          <h2>Why Travel with Us?</h2>
          <p>
            At Travel with ukiyo, we believe that travel is more than just
            visiting new places. Its about immersing yourself in different
            cultures, trying new foods, and meeting new people.
          </p>
          <p>
            Our travel guides are designed to provide you with an authentic and
            enriching experience. From bustling cities to serene landscapes, we
            cover destinations that offer a blend of excitement and tranquility.
          </p>
        </div>
        <div className="imageAboutSection">
          <img src={myImage3} className="info-image" />
        </div>
      </div>
    </section>
  );
};

const MeetTheGuides = () => {
  return (
    <section id="guides" className="guides-section">
      <div className="contentGuidesSection">
        <div className="firstGuide">
          <img src={myImage4} className="first-guide-image" alt="Guide 1" />
          <div className="first-guide-text">
            <h3>Patricia</h3>
            <p>
              Patricia years of experience in leading tours across the world and
              is an expert in cultural and historical sites.
            </p>
          </div>
        </div>
        <div className="secondGuide">
          <img src={myImage5} className="second-guide-image" alt="Guide 2" />
          <div className="second-guide-text">
            <h3>Marian</h3>
            <p>
              Marian specializes in adventure tours and knows the best hiking
              trails and outdoor activities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
