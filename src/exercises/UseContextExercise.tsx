import { useState } from "react";

// TODO: Refactor the code below to get rid of any props passing using useContext
// Hint: use the interface and context creation below:

// interface UserContext {
//   user: User;
//   setUser: (user: User) => void;
// }
// const UserContext = createContext<UserContext>({
//   user: { name: "John Doe", age: 30 },
//   setUser: () => {},
// });

interface User {
  name: string;
  age: number;
}

const Header = ({ user }: { user: User }) => {
  return (
    <header>
      <h1>Welcome to the App, {user.name}!</h1>
    </header>
  );
};

const UserProfile = ({ user }: { user: User }) => {
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};

const UserSettings = ({
  user,
  setUser,
}: {
  user: User;
  setUser: (user: User) => void;
}) => {
  const updateName = () => {
    setUser({ ...user, name: "Jane Doe" });
  };

  const updateAge = () => {
    setUser({ ...user, age: 25 });
  };

  return (
    <div>
      <h2>User Settings</h2>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

const MainContent = ({
  user,
  setUser,
}: {
  user: User;
  setUser: (user: User) => void;
}) => {
  return (
    <main>
      <UserProfile user={user} />
      <UserSettings user={user} setUser={setUser} />
    </main>
  );
};

const UseContextExercise = () => {
  const [user, setUser] = useState<User>({ name: "John Doe", age: 30 });

  return (
    <div>
      <Header user={user} />
      <MainContent user={user} setUser={setUser} />
    </div>
  );
};

export default UseContextExercise;
