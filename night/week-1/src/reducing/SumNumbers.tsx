import React from "react";
import ProblemCard from "../extras/ProblemCard";

// nums.reduce((acc, curr) => functionality/conditionals, startingValue);
// acc (accumulator) adding to
// starting value 0 

export const SumNumbers = () => {
  const numbers = [1, 2, 3, 4];


  // acc = 0
  // curr = 1
  // 1 + 2 = 3
  // 3 + 3 = 6
  // 6 + 4 = 10
  
  const total = numbers.reduce((acc, curr) => {
    return acc + curr
  }, 0);

  return (
    <ProblemCard
      title="Reduce 01 — Sum numbers"
      method="reduce"
      question="Use reduce() to compute the sum, then render it."
      dataPreview={nums}
    ></ProblemCard>
  );
};
