import CatBackground from "./CatBackground";
import CatInfo from "./CatInfo";

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
      <div className="cat-controls">
        <button className="cat-button feed">Покормить</button>
        <button className="cat-button pet">Погладить</button>
        <button className="cat-button play">Поиграть</button>
      </div>
    </div>
  );
}
