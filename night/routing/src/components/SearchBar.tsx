interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Search todos...",
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <input
        className="todo-input"
        type="search"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        aria-label="Search todos"
      />
      {value && (
        <button
          className="btn btn--ghost"
          type="button"
          onClick={() => onChange("")}
          aria-label="Clear search"
        >
          &times;
        </button>
      )}
    </div>
  );
}
