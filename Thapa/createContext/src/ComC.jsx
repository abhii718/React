import React, { useContext } from "react";
import { FirstName, LastName } from "./App";

const ComC = () => {
  const firstName = useContext(FirstName);
  const lastName = useContext(LastName);

  return <h1>My name is {firstName} {lastName}</h1>;
};

export default ComC;



// callback hell
// import React from "react"
// import { FirstName, LastName } from "./App.jsx"

// const ComC = () => {
//     return (
//         <>
//             <FirstName.Consumer>
//                 {(a) => {
//                     return (
//                         <LastName.Consumer>{
//                             (b) => {
//                                 return (
//                                     <h1>My name is {a} {b}
//                                     </h1>
//                                 )
//                             }}
//                         </LastName.Consumer>
//                     )
//                 }}
//             </FirstName.Consumer>
//         </>
//     )
// }

// export default ComC