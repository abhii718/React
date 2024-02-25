import React, { useState } from "react";
import "./style.css";
import Menu from "./menuApi.js";
import MenuCard from "./MenuCard.js";
import Navbar from "./Navbar.js";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];

console.log(uniqueList);
const Resturant = () => {
  const [menuData, seMenuData] = useState(Menu);
  const [menuList,setMenuList]= useState(uniqueList)
  const filterItem = (category) => {

    if  (category === "All") {
        seMenuData(Menu)
        return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    seMenuData(updatedList);
  };
  return (
    <>
     <Navbar filterItem = {filterItem} menuList = {menuList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
