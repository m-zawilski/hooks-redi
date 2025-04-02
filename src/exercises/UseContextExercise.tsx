import { useState } from "react";
import { useContext, createContext } from "react";

// TODO: Refactor the code below to get rid of any props passing using useContext
// Hint: use the interface and context creation below:

interface UserContext {
  user: User;
  setUser: (user: User) => void;
}
const UserContext = createContext<UserContext>({
  user: { name: "John Doe", age: 30 },
  setUser: () => {},
});

interface User {
  name: string;
  age: number;
}

const Header = () => {
  const userObj = useContext(UserContext);

  return (
    <header>
      <h1>Welcome to the App, {userObj.user.name}!</h1>
    </header>
  );
};

const UserProfile = () => {
  const userObj = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userObj.user.name}</p>
      <p>Age: {userObj.user.age}</p>
    </div>
  );
};

const UserSettings = () => {
  const userObj = useContext(UserContext);

  const updateName = () => {
    userObj.setUser({ ...userObj.user, name: "Jane Doe" });
  };

  const updateAge = () => {
    userObj.setUser({ ...userObj.user, age: 25 });
  };

  return (
    <div>
      <h2>User Settings</h2>
      <button onClick={updateName}>Update Name</button>
      <button onClick={updateAge}>Update Age</button>
    </div>
  );
};

const MainContent = () => {
  return (
    <main>
      <UserProfile />
      <UserSettings />
    </main>
  );
};

const UseContextExercise = () => {
  const [user, setUser] = useState<User>({ name: "John Doe", age: 30 });

  return (
    <div>
      <UserContext.Provider value={{user, setUser}}>
        <Header />
        <MainContent />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextExercise;
