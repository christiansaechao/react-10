import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];

  const test_case = "A"; // user input
  const filteredNames = names.filter((name) => {
    let lower_case_name = name.toLowerCase();
    let lower_case_test = test_case.toLowerCase();
    
    
  });

  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    ></ProblemCard>
  );
};
