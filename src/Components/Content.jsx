import React, { useContext, useState } from "react";
import Songs from "./Songs";
import List from "./List";
import Setting from "./Setting";
import { Link, Route, Routes } from "react-router-dom";
import Playlist from "./Playlist";
import Adding from "./Adding";
import { myContext } from "./Context";

function Content() {
  const { add, linksHeight, setLinksHeight } = useContext(myContext);
  return (
    <div className="content h-[90%]  flex justify-between">
      <div
        className={`sidebar transition-transform ${linksHeight} w-[25%] rounded-lg overflow-hidden flex flex-col gap-2`}
      >
        <Link
        onClick={()=>window.innerWidth<601?setLinksHeight('h-0'):null}
          className="text-white text-lg py-3 px-5 rounded-lg bg-zinc-800"
          to="/"
        >
          Songs
        </Link>
        <Link
        onClick={()=>window.innerWidth<601?setLinksHeight('h-0'):null}
          className="text-white text-lg py-3 px-5 rounded-lg bg-zinc-800"
          to="/playlist"
        >
          Playlists
        </Link>
        <Link
        onClick={()=>window.innerWidth<601?setLinksHeight('h-0'):null}
          className="text-white text-lg py-3 px-5 rounded-lg bg-zinc-800"
          to="/setting"
        >
          Settings
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Songs />}></Route>
        <Route path="/playlist" element={<List />}></Route>
        <Route path="/playlist/:id" element={<Playlist />}></Route>
        <Route path="/setting" element={<Setting />}></Route>
      </Routes>
      {add ? <Adding /> : null}
    </div>
  );
}

export default Content;
