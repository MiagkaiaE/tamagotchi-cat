export default function Cat() {
  return (
    <div className="cat-container">
      <div
        className="cat-background"
        style={{
          backgroundImage: "url('src/assets/images/cat-sleep-day.jpg')",
        }}
      ></div>

      <div className="cat-info">
        <h1>Доволен • Рыжик • Энергия: 80% </h1>
      </div>

      <div className="cat-controls">
        <button className="cat-button feed">Покормить</button>
        <button className="cat-button pet">Погладить</button>
        <button className="cat-button play">Поиграть</button>
      </div>
    </div>
  );
}