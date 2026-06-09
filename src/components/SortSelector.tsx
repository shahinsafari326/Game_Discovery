import React from "react";

interface SortSelectorProps {
  onSelect: (sortBy: string | null) => void;
}

const SortSelector = ({ onSelect }: SortSelectorProps) => {
  const sortOptions = [
    { value: "", label: "Relevance" },
    { value: "name", label: "Name" },
    { value: "-released", label: "Release Date" },
    { value: "-added", label: "Added" },
    { value: "-metacritic", label: "Popularity" },
  ];
  return (
    <select
      className="rounded-md border px-3 py-2 mb-4"
      onChange={(e) =>
        onSelect(e.target.value === "all" ? null : e.target.value)
      }
    >
      <option value="all">Sort By</option>
      {sortOptions.map((option) => (
        <option className="bg-gray-100" key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SortSelector;
