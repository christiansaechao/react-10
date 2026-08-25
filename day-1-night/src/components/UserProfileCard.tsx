/**
 * props: {
 *    username: string;
 *    img: string;
 *    bio: string;
 *    age: number;
 *    phoneNumber: string;
 *    isStudent: boolean;
 * }
 */

type UserProfileCardType = {
  data: {
    username: string;
    img: string;
    bio: string;
    age: number;
    phoneNumber: string;
    isStudent: boolean;
  };
};

export const UserProfileCard = (props: UserProfileCardType) => {
  return (
    <div
      style={{ border: "1px solid white", width: "300px" }}
      className="ProfileCard"
    >
      <h2>{props.data.username}</h2>
    </div>
  );
};
