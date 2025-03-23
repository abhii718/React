import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="px-5 h-16 text-white bg-red-500 flex items-center justify-between">
        <h2>LOGO</h2>
        <div className="flex gap-8 ">
        <Link href={"/About"}>About</Link>
        <Link href={"/Product"}>Product</Link>
        <Link href={"/Courses"}>Courses</Link>
        </div>
      </div>
    </>
  );
};
export default Header;
