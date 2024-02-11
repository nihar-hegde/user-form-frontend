import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="  py-4 flex items-center justify-start px-5 gap-5 bg-gray-200">
      <Link href={"/"} className={buttonVariants()}>
        Home
      </Link>
      <Link href={"/all-users"} className={buttonVariants()}>
        All Forms
      </Link>
    </nav>
  );
};

export default Navbar;
