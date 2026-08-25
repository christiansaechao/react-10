import "./App.css";
import { UserProfileCard } from "./components/UserProfileCard";

function App() {
  const Luffy = {
    username: "Pirate King",
    img: "some luffy image",
    bio: "Ace's Brother",
    age: 18,
    phoneNumber: "999-999-MEAT",
    isStudent: false,
  };

  return (
    <>
      <UserProfileCard data={Luffy} />
    </>
  );
}

export default App;
