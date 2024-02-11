import React, { useContext } from "react";
import { MdPlayArrow } from "react-icons/md";
import { myContext } from "./Context";
import Adding from "./Adding";

function SongCard({ data }) {
  const { name, creator, photo } = data;
  const { setAdd } = useContext(myContext);

  return (
    <div className="h-72 w-60 bg-black rounded-md p-3 flex flex-col justify-between leading-none">
      <div className="h-44 w-full rounded overflow-hidden">
        <img
          className="h-full w-full object-cover text-white"
          src={photo}
          alt="Song Photo"
        />
      </div>
      <h1 className="text-white font-semibold text-xl leading-none">{name}</h1>
      <h1 className="text-zinc-300 text-sm">{creator}</h1>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setAdd({ name: name, creator: creator, photo: photo })}
          className="text-zinc-800 font-semibold text-sm bg-sky-400 w-max px-3 py-1 rounded-full"
        >
          Add to Playlist
        </button>
        <button className="text-zinc-800 font-semibold text-sm bg-green-500 h-7 w-7 flex justify-center items-center rounded-full">
          <MdPlayArrow />
        </button>
      </div>
    </div>
  );
}

export default SongCard;
