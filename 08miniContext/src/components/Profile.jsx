import React, { useContext } from "react";
import UserContext from "../context/UserContext";


function Profile() {
  const { user } = useContext(UserContext);
  console.log(user)
  if (!user) {
      return <div>Please Login</div>;
    }
  
    return <div>Welcome {user.Username} and your password is {user.Password}</div>;
  
}

export default Profile; 
