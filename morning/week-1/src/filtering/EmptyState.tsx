import React from "react";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";

  const filter = items.filter((item) => {
    const lower_spelling = item.toLowerCase();
    const lower_search = searchTerm.toLowerCase();

    // ternary operator 
    return lower_spelling === lower_search ? item : "No results found";
  });

  return (
    <ProblmCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      <p>{filter}</p>
    </ProblmCard>
  );
};
