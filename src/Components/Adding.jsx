import React, { useContext } from "react";
import { myContext } from "./Context";
import { RxCross2 } from "react-icons/rx";

function Adding() {
  const { playlists, addToPlayList, setAdd } = useContext(myContext);
  return (
    <div className="h-[50%] text-white w-[50%] absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-zinc-700 p-5 flex flex-col gap-5 rounded-lg overflow-y-scroll no-scrollbar">
      <button
        onClick={() => setAdd(false)}
        className="absolute top-5 right-5 text-xl p-1"
      >
        <RxCross2 />
      </button>
      <h1 className="text-xl text-center">Select Playlist</h1>
      <ul className="flex flex-col gap-2">
        {playlists.map((item, index) => {
          return (
            <li
              onClick={() => addToPlayList(item.playlistName)}
              className="bg-zinc-600 cursor-pointer p-2 rounded-md"
              key={index}
            >
              {item.playlistName}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Adding;
