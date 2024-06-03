import "./AboutMe.css";
import myImage from "../pics/aboutme.jpeg";

const AboutMe = () => {
  return (
    <div className="about-me">
      <div className="about-me-content">
        <div className="text">
          <h2 className="title-about-me">ABOUT ME</h2>
          <p className="p-about-me">
            Hi there! I &apos;m Patricia, a 23-year-old adventurer with an
            insatiable passion for travel and exploration. From the bustling
            streets of Tokyo to the serene landscapes of Argentina, I &apos;ve
            been fortunate enough to wander through many corners of our
            beautiful planet. My journey has not only broadened my horizons but
            also ignited a deep-seated love for sharing experiences with others.
            <br />
            Driven by my enthusiasm for cultural immersion and authentic
            encounters, I &apos;ve embarked on a new chapter: crafting intimate
            tours for small, open-minded groups of fellow travelers. Each
            excursion is meticulously designed to offer not just sightseeing,
            but genuine connections with local communities and unforgettable
            moments that transcend mere tourism. Join me on this extraordinary
            voyage, where every step is an opportunity for discovery, laughter,
            and enriching conversations. Let &apos;s create memories together
            that will linger long after the journey ends. <br />
            Adventure awaits!
          </p>
          <br />
          <p className="p-site-name">
            In Japanese, ukiyo (浮世) traditionally means floating world. <br />
            <br />
            The concept of ukiyo reflects a focus on enjoying the fleeting,
            transient pleasures of life, often in contrast to the more somber
            Buddhist idea of &quot;suffering world&quot; or &quot;transitory
            world.&quot;
          </p>
        </div>
        <div className="photo">
          <img src={myImage} alt="Your Photo" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
