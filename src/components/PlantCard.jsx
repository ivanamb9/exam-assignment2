export default function PlantCard({ plant }) {
  return (
    <div className="card">
      {plant.image && <img src={plant.image} alt={plant.name} className="plant-img" />}
      <h3>{plant.name}</h3>
      <p><em>{plant.scientific}</em></p>

      <p><strong>Light:</strong> {plant.light}</p>
      <p><strong>Watering:</strong> {plant.watering}</p>
      <p><strong>Soil:</strong> {plant.soil}</p>
      <p><strong>Difficulty:</strong> {plant.level}</p>
    </div>
  );
}