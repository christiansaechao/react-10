import ProblemCard from "../extras/ProblemCard";


// const address = "3859 Laney Dr.";

// component declaration
export const MultipleConditions = () => {
  const users = [
    { id: 1, name: "Chris", active: true, age: 17 },
    { id: 2, name: "Pat", active: true, age: 22 },
    { id: 3, name: "Shelly", active: false, age: 28 },
    { id: 4, name: "Charmaine", active: false, age: 62 },
    { id: 5, name: "Morgan", active: true, age: 30 },
  ];
  
  // looking for users, sort/filter, based on activity and age > 18
  const filteredUsers = users.filter((user) => user.active && user.age > 18);
  // filter method, filter loops over all the users => user figure out if this | conditional user is active and user is over 18
  // returning/rendering | some UI/HTML/JSX
  // problemcard is a component
  // title, method, question, dataPreview | props

  return (
    <ProblemCard
      title="Filter 07 — Multiple conditions"
      method="filter"
      question="Render users who are active AND age > 18."
      dataPreview={users}
    >
      {filteredUsers.map((user) => (
        <p>{user.name}</p>
      ))}
    </ProblemCard>
  );
};