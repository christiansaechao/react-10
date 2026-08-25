import ProblemCard from "../extras/ProblemCard";

export const CapitalizeWords = () => {
  const animals = ["dog", "cat", "bird"];

  return (
    <ProblemCard
      title="Map 03 — Capitalize words"
      method="map"
      question="Render each word with the first letter capitalized."
      dataPreview={animals}
    >
      {animals.map((animal) => {
        // gotten the first letter, uppercased
        // the rest of the animal string, everything past the first letter
        // dog => d => D => out of bounds

        return <p style={{ textTransform: "Capitalize" }}>{animal}</p>;
      })}
    </ProblemCard>
  );
};
