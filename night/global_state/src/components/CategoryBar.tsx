interface CategoryBarProps {
  categories: string[];
  selected: string;
  // Created in App, passed down through ProductsPage to here.
  onSelect: (category: string) => void;
}

export default function CategoryBar({
  categories,
  selected,
  onSelect,
}: CategoryBarProps) {
  return (
    <div className="category-bar">
      {categories.map((category) => (
        <button
          key={category}
          className={category === selected ? "chip chip-active" : "chip"}
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
