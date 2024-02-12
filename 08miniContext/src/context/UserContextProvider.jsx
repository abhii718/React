import React from "react";
import UserConstext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [User, setUser] = React.useState(null);
  return (
    <UserConstext.Provider value={{ User, setUser }}>
      {children}
    </UserConstext.Provider>
  );
};
export default UserContextProvider;
