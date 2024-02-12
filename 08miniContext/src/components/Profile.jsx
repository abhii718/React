import React, { useContext } from "react";
import UserConstext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserConstext);
  if (!user) {
      return <div>Please Login</div>;
    }
  else {
    return <div>Welcome {user.username}</div>;
  }
}

export default Profile;
