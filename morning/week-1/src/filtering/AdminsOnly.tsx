import ProblemCard from "../extras/ProblemCard";

// users.filter(() => somevalue === value)
//                 => conditional | true => add it to the new array that filter creates
//

export const AdminsOnly = () => {
  const users = [
    { id: 1, name: "Alex", isAdmin: true },
    { id: 2, name: "Casey", isAdmin: false },
    { id: 3, name: "Robin", isAdmin: true },
  ];

  const filteredUsers = users.filter((user) => user.isAdmin);

  return (
    <ProblemCard
      title="Filter 03 — Filter objects by property"
      method="filter"
      question="Render only the admins."
      dataPreview={users}
    >
      {/* [{ id: 1, name: "Alex", isAdmin: true}, { id: 3, name: "Robin", isAdmin: true }] */}
      {filteredUsers.map((user) => (
        <div>
          {user.name}, is an admin {user.isAdmin + ""}
        </div>
      ))}
    </ProblemCard>
  );
};
