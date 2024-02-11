import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "./Context";
import { RiArrowLeftCircleLine } from "react-icons/ri";
import { MdDeleteForever } from "react-icons/md";
import { IoIosRemoveCircleOutline } from "react-icons/io";

function Playlist() {
  const navigate = useNavigate();
  const { playlists, removePlaylist, removeSong } = useContext(myContext);
  function fromCamelCase(camelCase) {
    return camelCase
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");
  }

  const goBack = () => navigate(-1);

  const { id } = useParams();
  const currentPlaylistName = fromCamelCase(id);

  const currentPlaylist = playlists.filter(
    (items) => items.playlistName == currentPlaylistName
  );

  if (currentPlaylist.length == 0) {
    return (
      <div className="h-full w-[74%] bg-zinc-800 text-white p-5 flex flex-col gap-6 relative rounded-lg overflow-y-scroll no-scrollbar">
        <h1 className="text-red-400">Error: This page does not exist.</h1>
      </div>
    );
  }
  const allSongs = currentPlaylist[0].songs;

  return (
    <div className="playlist h-full w-[74%] bg-zinc-800 text-white p-5 flex flex-col gap-6 relative rounded-lg overflow-y-scroll no-scrollbar">
      <button
        onClick={() => {
          const decision = confirm(
            "Are you sure you want to delete the Playlist ?"
          );
          if (decision) {
            navigate("/playlist");
            removePlaylist(currentPlaylistName);
          }
        }}
        className="absolute top-6 right-8 text-2xl"
      >
        <MdDeleteForever />
      </button>
      <h1 className="text-xl text-center">{currentPlaylistName}</h1>
      <button onClick={goBack} className="absolute top-6 left-8 text-2xl">
        <RiArrowLeftCircleLine />
      </button>
      <ul>
        {allSongs.map((song, index) => {
          return (
            <li 
              className="cursor-pointer border-b mt-2 p-2 border-zinc-600 flex items-center justify-between gap-5"
              key={index}
            >
              <div className="flex items-center gap-5">
                <img
                  className="h-12 w-12 rounded-xl object-cover text-white"
                  src={song.photo}
                  alt=""
                />
                <h1>
                  {song.name} by {song.creator}
                </h1>
              </div>
              <div onClick={()=>{removeSong(song.name, currentPlaylistName)}} className="text-lg">
                <IoIosRemoveCircleOutline />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Playlist;
