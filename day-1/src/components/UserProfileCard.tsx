/**
 * props: {
 *   name: string;
     bio: string;
     age: number;
     email: string;
 * }
 */

type UserProfileCardType = {
  name: string;
  bio: string;
  age: number;
  email: string;
};

export const UserProfileCard = (props: UserProfileCardType) => {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Bio: {props.bio}</p>
      <p>I am {props.age} years old.</p>
      <p>You can contact me at {props.email}</p>
    </div>
  );
};
