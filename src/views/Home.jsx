import heroImage from "../assets/hero.jpg";  
import deliciosaImage from '../assets/deliciosa.jpg'; 
import pbImage from '../assets/pb.jpg'; 
import jasmineImage from '../assets/jasmine.jpg'; 
import "./Home.css";      

export default function Home() {
  return (
    <div className="home">

  <div className="hero">
    <img src={heroImage} alt="Flower Leaf" className="hero-image" />
  </div>

  <section className="welcome-section">
    <h1 className="welcome-title">Welcome to Flower Plant</h1>
    <p className="welcome-text">
      FlowerPlant is a community for plant enthusiasts, gardeners, and beginners looking to learn about
plant care. The platform aims to provide a user-friendly website where users can explore plant care
guides and manage their personal plant collections.
    </p>
  </section>

  <section className="guides-section">
    <h2 className="section-title">Plant Care Guides</h2>

   {/* Plant 1 - Philodendron Birkin */}
<div className="plant-row">
  <img src={pbImage} alt="Philodendron Birkin" />
  <div className="plant-info">
    <h3>Philodendron Birkin</h3>
    <p className="latin-name">(Philodendron Birkin)</p>
    <p>
      <strong>Light:</strong> Thrives on indirect sunlight. It also does well in light shade. <br />
      <strong>Watering:</strong> When top soil is dry. <br />
      <strong>Soil:</strong> Loam, Sand. <br />
      <strong>Difficulty:</strong> Expert
    </p>
  </div>
</div>

   {/* Plant 2 - Jasmine */}
<div className="plant-row">
  <img src={jasmineImage} alt="Jasmine" />
  <div className="plant-info">
    <h3>Jasmine</h3>
    <p className="latin-name">(Jasminum polyanthum)</p>
    <p>
      <strong>Light:</strong> Very bright — preferably with direct sun. <br />
      <strong>Watering:</strong> Water regularly so that the soil is kept slightly moist. <br />
      <strong>Soil:</strong> Moist, yet free draining soil enriched with organic matter. <br />
      <strong>Difficulty:</strong> Intermediate
    </p>
  </div>
</div>
   {/* Plant 3 */}
<div className="plant-row">
  <img src={deliciosaImage} alt="Monstera" />
  <div className="plant-info">
    <h3>Deliciosa</h3>
    <p className="latin-name">(Monstera Deliciosa)</p>
    <p>
      <strong>Light:</strong> Thrives in plenty of light but not in harsh direct sun. <br />
      <strong>Watering:</strong> Every 7–10 days. <br />
      <strong>Soil:</strong> Moist, well-draining potting soil. <br />
      <strong>Difficulty:</strong> Beginner
    </p>
  </div>
</div>

  </section>

</div>
  );
}