import { useState, useEffect } from "react";
import './MyPlants.css';
import deliciosa from "../assets/deliciosa.jpg";
import jasmine from "../assets/jasmine.jpg";
import pb from "../assets/pb.jpg";

export default function MyPlants() {
  const [myPlants, setMyPlants] = useState([]);

  // Predefined plants with images
  const predefinedPlants = [
    {
      name: "Philodendron Birkin",
      scientific: "Philodendron Birkin",
      image: pb,
      light: "Medium",
      watering: "Once a week",
    },
    {
      name: "Jasmine",
      scientific: "Jasminum polyanthum",
      image: jasmine,
      light: "Bright",
      watering: "Twice a week",
    },
    {
      name: "Deliciosa",
      scientific: "Monstera Deliciosa",
      image: deliciosa,
      light: "Medium",
      watering: "Once a week",
    },
  ];

  // LOAD saved plants
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("myPlants")) || [];
    setMyPlants(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("myPlants", JSON.stringify(myPlants));
  }, [myPlants]);

  function addPlant(plant) {
    if (myPlants.find(p => p.name === plant.name)) return;
    setMyPlants([...myPlants, plant]);
  }

  function deletePlant(index) {
    setMyPlants(myPlants.filter((_, i) => i !== index));
  }

  return (
    <div className="myplants-page">
      <h1 className="choose-title">Choose a Plant</h1>

      {/* IMAGE ROW */}
      <div className="image-row">
        {predefinedPlants.map((plant, index) => (
          <img
            key={index}
            src={plant.image}
            alt={plant.name}
            className="plant-image"
          />
        ))}
      </div>

      {/* PLANT DETAILS */}
      {predefinedPlants.map((plant, index) => (
        <div key={index} className="plant-section">
          <h3 className="plant-name">{plant.name}</h3>
          <p className="scientific-name">({plant.scientific})</p>
          <button className="add-btn" onClick={() => addPlant(plant)}>
            add to my plants
          </button>
        </div>
      ))}

      <h2 className="collection-title">My Collection</h2>

      {myPlants.length === 0 && <p className="empty-text">No plants added yet.</p>}

      {myPlants.map((plant, index) => (
        <div key={index} className="collection-item">
          <h3 className="plant-name">{plant.name}</h3>
          <p>Light: {plant.light}</p>
          <p>Watering: {plant.watering}</p>
          <button className="remove-btn" onClick={() => deletePlant(index)}>
            remove
          </button>
        </div>
      ))}
    </div>
  );
}