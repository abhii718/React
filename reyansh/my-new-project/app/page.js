"use client";
import React from "react";
import Header from "@/Components/Header";

const page = () => {
  return (
    <>
      <div>
        <Header/>
        <h1>This is Home Page</h1>
     
      </div>
    </>
  );
};
export default page;

/*
import React, { useState } from "react";
import Header from "@/Components/Header";

const page = () => {
  const [user, setuser]= useState("Abhii")
  const [edit, setedit]= useState("anand")
  
  return (
    <>
      <Header passingtoheader={user} secondpassing={edit}/>
      {user}
    </>
  );
};
export default page;
*/

// const page = () => {
//   const [marks, setmarks] = useState(80);
//   const apna = () => {
//     if (marks === 50) {
//       setmarks(80);
//     } else if (marks === 80) {
//       setmarks(50);
//     }
//   };
//   return (
//     <>
//       <h1 className=" font-bold text-xl text-red-500">
//         My marks in 10th were {marks}
//       </h1>
//       <button onClick={apna}>Update </button>
//     </>
//   );
// };

// const page = () => {
//   let groom = "Salmon";
//   let bride = "Kat";
//   groom = "VickyKaushal";
//   return (
//     <>
//       <div>
//         heheheheheh ${bride + groom}
//         {bride}
//       </div>
//       <h1>this is what I mean</h1>
//     </>
//   );
// };
