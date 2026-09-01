import ProblemCard from "../extras/ProblemCard";

export const SearchSimulation = ({ searchTerm }: { searchTerm: string }) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];
  const filteredTerm = items.filter((item) => item === searchTerm);

  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: searchTerm }}
    >
      <div>{filteredTerm[0]}</div>
    </ProblemCard>
  );
};
