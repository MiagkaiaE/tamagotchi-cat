export default function CatInfo({mood, name, energy}) {
  return (
    <div className="cat-info">
      <h1>{mood} • {name} • Энергия: {energy} </h1>
    </div>
  );
}
 