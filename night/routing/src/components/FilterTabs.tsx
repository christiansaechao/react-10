import type { Filter } from "../types";

const OPTIONS: { value: Filter; label: string }[] = [
  { value: "all", label: "All" },
  { value: "active", label: "Active" },
  { value: "completed", label: "Completed" },
];

interface FilterTabsProps {
  value: Filter;
  onChange: (value: Filter) => void;
}

export function FilterTabs({ value, onChange }: FilterTabsProps) {
  return (
    <div className="filter-tabs" role="tablist">
      {OPTIONS.map((option) => (
        <button
          key={option.value}
          type="button"
          role="tab"
          aria-selected={value === option.value}
          className={`filter-tabs__tab${
            value === option.value ? " is-active" : ""
          }`}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
