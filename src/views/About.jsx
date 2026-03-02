import "./About.css";
import plantsImage from '../assets/plants.jpg'; 


export default function About() {
  return (
    <div className="about-container">
      
      {/* About Section */}
      <section className="about-top">
        <h1 className="about-title">About us.</h1>
        <p className="about-text">
          FlowerPlant is an online community designed for plant enthusiasts,
          gardeners, and beginners who want to learn and grow their plant care
          knowledge. The platform offers a user-friendly website where users
          can explore detailed plant care guides, discover new species, and
          manage their personal plant collections. By combining education,
          organization, and community interaction, FlowerPlant aims to make
          plant care accessible, enjoyable, and rewarding for everyone.
        </p>
      </section>

      {/* Image */}
      <img src={plantsImage} alt="plants" />
    

      {/* Mission */}
      <section className="about-row">
        <h2 className="script pink">Our mission</h2>
        <p className="side-text">
          Our mission is to make plant care simple, accessible, and enjoyable
          for everyone by providing reliable information, practical tools, and
          a supportive community. The platform aims to empower users with the
          knowledge and confidence needed to successfully care for their
          plants, regardless of their experience level.
        </p>
      </section>

      {/* Purpose */}
      <section className="about-row reverse">
        <p className="side-text">
          Our purpose is to create a centralized space where plant enthusiasts
          can learn, organize, and grow their passion for plants. By offering
          plant care guides and personal collection management features, the
          platform helps users track their plants, improve care routines, and
          build sustainable gardening habits while connecting with others who
          share similar interests.
        </p>
        <h2 className="script pink">Our purpose</h2>
      </section>

    </div>
  );
}