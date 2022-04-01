import "./Categories.css";

export function Categories({ setCategory }) {
  const categories = [
    { id: 0, name: "Tout" },
    { id: 1, name: "autre" },
    { id: 2, name: "hardware" },
  ];

  return (
    <select onChange={(e) => setCategory(parseInt(e.target.value))}>
      {categories.map((category) => (
        <option value={category.id} key={category.id}>
          {category.name}
        </option>
      ))}
    </select>
  );
}
