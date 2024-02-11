import React, { useContext } from "react";
import { SiBackblaze } from "react-icons/si";
import { CiMenuFries } from "react-icons/ci";
import { myContext } from "./Context";

function NavBar() {
  const {linksHeight, setLinksHeight } = useContext(myContext);
  return (
    <div className="h-16 w-full bg-zinc-800 rounded-md flex items-center justify-between px-5 text-white">
      <h1 className="text-2xl font-semibold animate-bounce flex items-center gap-1">
        <SiBackblaze />
        Songify
      </h1>
      <div onClick={() => {
        if(linksHeight == 'h-0') setLinksHeight('h-[260px]');
        else  setLinksHeight('h-0');
      }} className="menu hidden text-xl">
        <CiMenuFries />
      </div>
      <div className="userBtn flex gap-5 font-semibold">
        <button className="bg-zinc-900 transition-colors duration-[500ms] hover:bg-green-500 hover:text-zinc-900 rounded-full py-2 px-5">
          Sign up
        </button>
        <button className="bg-zinc-300 transition-colors duration-[500ms] hover:bg-green-500 text-zinc-900 rounded-full py-2 px-5">
          Log in
        </button>
      </div>
    </div>
  );
}

export default NavBar;
