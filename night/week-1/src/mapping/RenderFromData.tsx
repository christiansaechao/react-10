import ProblemCard from "../extras/ProblemCard";

export const RenderFromData = () => {
  const users = [
    { id: 1, name: "Ava", email: "ava@email.com" },
    { id: 2, name: "Noah", email: "noah@email.com" },
  ];

  return (
    <ProblemCard
      title="Map 06 — Render components from data"
      method="map"
      question="Use map() to render a <UserCard /> for each user."
      dataPreview={users}
    >
      {users.map((user) => (
        <UserCard id={user.id} name={user.name} email={user.email} />
      ))}
    </ProblemCard>
  );
};

type UserCardProps = {
  id: number;
  name: string;
  email: string;
};

// template
const UserCard = ({ id, name, email }: UserCardProps) => {
  return (
    <div
      className={id + ""}
      style={{
        border: "1px solid #eee",
        padding: 10,
        borderRadius: 10,
        marginBottom: 8,
      }}
    >
      <div>
        <strong>{name}</strong>
      </div>
      <div style={{ opacity: 0.8 }}>{email}</div>
    </div>
  );
};
