import CatBackground from "./CatBackground";
import CatInfo from "./CatInfo";
import CatControls from "./CatControls";

export default function Cat() {
  // данные о коте
  const cat = {
    mood: "Доволен",
    name: "Персик",
    energy: 80,
  };
  return (
    <div className="cat-container">
      <CatBackground />
      <CatInfo mood={cat.mood} name={cat.name} energy={cat.energy} />
      <CatControls />
    </div>
  );
}
