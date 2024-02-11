import React from "react";
import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="h-full w-[25%] rounded-lg overflow-hidden flex flex-col gap-2">
      <div>
        <Link className="text-white text-lg py-3 px-5 rounded-lg bg-zinc-800" to="/">Songs</Link>
        <Link className="text-white text-lg py-3 px-5 rounded-lg bg-zinc-800" to="/playlist">Playlists</Link>
        <Link className="text-white text-lg py-3 px-5 rounded-lg bg-zinc-800" to="/setting">Settings</Link>
      </div>
    </div>
  );
}

export default SideBar;
