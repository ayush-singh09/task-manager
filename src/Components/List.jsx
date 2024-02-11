import React, { useContext, useState } from "react";
import { myContext } from "./Context";
import Tab from "./Tab";

function List() {
  const { playlists, setPlaylists } = useContext(myContext);
  const [addNew, setAddNew] = useState(false);
  const [playlistName, setPlaylistName] = useState("");

  const addNewPlayList = () => {
    if (playlistName != "") {
      setPlaylists((prevPlaylists) => [
        ...prevPlaylists,
        {
          playlistName:
            playlistName.charAt(0).toUpperCase() + playlistName.slice(1),
          songs: [],
        },
      ]);
      setPlaylistName("");
      setAddNew(false);
    }
  };

  return (
    <div className="list h-full overflow-y-scroll no-scrollbar text-white w-[74%] bg-zinc-800 p-5 flex flex-col gap-5 rounded-lg">
      <h1 className="text-xl text-center">All Playlist</h1>

      {addNew ? (
        <div className="ml-2 flex gap-3">
          <input
            type="text"
            value={playlistName}
            onChange={(e) => {
              setPlaylistName(e.target.value);
            }}
            placeholder="Playlist name..."
            className="py-1 px-2 rounded bg-zinc-600"
          />
          <h1
            onClick={() => addNewPlayList()}
            className="bg-sky-300 text-zinc-950 cursor-pointer w-fit py-1 px-3 rounded-full"
          >
            Add
          </h1>
        </div>
      ) : (
        <h1
          onClick={() => setAddNew(true)}
          className="bg-sky-300 text-zinc-950 cursor-pointer w-fit py-1 px-3 rounded-full ml-2"
        >
          Add+
        </h1>
      )}

      <ul className=" flex flex-wrap justify-evenly gap-5">
        {playlists.map((item, index) => {
          return <Tab key={index} data={item} />;
        })}
      </ul>
    </div>
  );
}

export default List;
