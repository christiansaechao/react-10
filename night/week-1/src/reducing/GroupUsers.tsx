import ProblemCard from "../extras/ProblemCard";

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Larry", role: "admin" },
    { id: 2, name: "Jorge", role: "user" },
    { id: 3, name: "Karina", role: "user" },
    { id: 4, name: "Jin", role: "admin" },
    { id: 5, name: "Bone", role: "admin" },
  ];

  //Goal: Group each users by role
  //Start:
  //End goal: {curr.name} {curr.role}
  // Count

  //  admin, user
  // [ []  ,   [] ]

  // 1. we loop everything (reduce method)
  // 2. check the users role
  // 3. branching decisions either the role is admin or user
  // if admin => add/push it ot the admins: []
  // if user => add/push it to the users: []
  // 4. return acc

  const groupUsers = users.reduce(
    (acc, user) => {
      if (user.role === "admin") {
        acc.admins.push(user);
      }

      if (user.role === "user") {
        acc.users.push(user);
      }
    },
    {
      admins: [
        { id: 1, name: "Larry", role: "admin" },
        { id: 4, name: "Jin", role: "admin" },
        { id: 5, name: "Bone", role: "admin" },
      ],
      users: [
        { id: 2, name: "Jorge", role: "user" },
        { id: 3, name: "Karina", role: "user" },
      ],
    },
  );

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      <div>
        {/* TODO: const grouped = users.reduce((acc, u) => {...}, {} as Record<string, typeof users>) Admin: , */}
      </div>
    </ProblemCard>
  );
};
