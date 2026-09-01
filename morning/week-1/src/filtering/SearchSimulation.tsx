import React from "react";

export const SearchSimulation = ({ searchTerm }) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];

  const filtered_items = items.filter((item) => item === searchTerm);


  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: searchTerm }}
    >
        <div>{filtered_items}</div>
    </ProblemCard>
  );
};



