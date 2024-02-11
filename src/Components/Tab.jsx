import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { myContext } from "./Context";

function Tab({ data }) {
  const { playlists, setPlaylists } = useContext(myContext);
  const navigate = useNavigate();

  function toCamelCase(words) {
    return words
      .toLowerCase()
      .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
        return index === 0 ? word.toLowerCase() : word.toUpperCase();
      })
      .replace(/\s+/g, "");
  }

  const handlePlaylistclick = () => {
    const navigatePage = "/playlist/" + toCamelCase(data.playlistName);
    navigate(navigatePage);
  };

  const url = playlists.filter((p) => p.playlistName == data.playlistName)[0]
    .songs;

  return (
    <div
      onClick={handlePlaylistclick}
      className="cursor-pointer rounded-full p-2 bg-zinc-900 w-52 h-20 flex items-center gap-2"
    >
      <img
        className="h-16 w-16 rounded-full object-cover text-white"
        src={
          url.length > 0
            ? url[0].photo
            : "https://images.unsplash.com/photo-1514248787438-077495e23674?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5ld3xlbnwwfHwwfHx8MA%3D%3D"
        }
        alt=""
      />

      <div className="mr-3">
        <h1 className="text-lg">{data.playlistName}</h1>
        <h1 className="text-sm text-zinc-400"> Songs</h1>
      </div>
    </div>
  );
}

export default Tab;
