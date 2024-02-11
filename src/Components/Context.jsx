import React, { createContext, useEffect, useState } from "react";

export const myContext = createContext();

function Context(props) {
  const [linksHeight, setLinksHeight] = useState(()=>{
    if(window.innerWidth < 601) return 'h-0';
    else  return 'h-full';
  })

  const data = [
    {
      name: "Raaste",
      creator: "Ayush Singh",
      photo:
        "https://images.unsplash.com/photo-1702311178078-1edf877d3afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
    },
    {
      name: "Samandar Mai",
      creator: "Veeraan Patel",
      photo:
        "https://images.unsplash.com/photo-1706797060168-2996c1372bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Christophia",
      creator: "James Claron",
      photo:
        "https://images.unsplash.com/photo-1706788768591-a10a627bbdec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Girgit",
      creator: "Raahat Sharma",
      photo:
        "https://images.unsplash.com/photo-1707024258954-43c030ebab1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  const play = [
    {
      playlistName: "Favourites",
      songs: [
        {
          name: "Raaste",
          creator: "Ayush Singh",
          photo:
            "https://images.unsplash.com/photo-1702311178078-1edf877d3afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        },
        {
          name: "Christophia",
          creator: "James Claron",
          photo:
            "https://images.unsplash.com/photo-1706788768591-a10a627bbdec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Samandar Mai",
          creator: "Veeraan Patel",
          photo:
            "https://images.unsplash.com/photo-1706797060168-2996c1372bc7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4Nnx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
    {
      playlistName: "My Playlist",
      songs: [
        {
          name: "Christophia",
          creator: "James Claron",
          photo:
            "https://images.unsplash.com/photo-1706788768591-a10a627bbdec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
          name: "Raaste",
          creator: "Ayush Singh",
          photo:
            "https://images.unsplash.com/photo-1702311178078-1edf877d3afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        },
      ],
    },
    {
      playlistName: "Current",
      songs: [
        {
          name: "Raaste",
          creator: "Ayush Singh",
          photo:
            "https://images.unsplash.com/photo-1702311178078-1edf877d3afe?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8",
        },
        {
          name: "Christophia",
          creator: "James Claron",
          photo:
            "https://images.unsplash.com/photo-1706788768591-a10a627bbdec?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
      ],
    },
  ];

  const addToPlayList = (pName) => {
    setPlaylists((prevPlay) => {
      return prevPlay.map((c, i) => {
        if (pName === c.playlistName)
          return {
            ...c,
            songs: [...c.songs, add],
          };
        else return c;
      });
    });
    setAdd(false);
  };

  const removePlaylist = (name) => {
      setPlaylists(playlists.filter(item=> item.playlistName != name));
  };

  const removeSong = (name,from)=>{
    setPlaylists(playlists.map((p)=>{
      if(p.playlistName == from){
        const arr = p.songs.filter((song)=>  song.name !== name)
        console.log(p);
        return {...p, songs:arr};
      }
      else return p;
    }))
  }

  const [add, setAdd] = useState(false);
  const [songs, setSongs] = useState(()=>{
    const storedData = localStorage.getItem('allSongs')
    return storedData ? JSON.parse(storedData) : [data]
  });
  
  const [playlists, setPlaylists] = useState(()=>{
    const storedData = localStorage.getItem('allPlaylists');
    return storedData ? JSON.parse(storedData) : [play];
  });

  useEffect(()=>{
    localStorage.setItem('allSongs',JSON.stringify(songs))
  },[songs]);


  useEffect(()=>{
    localStorage.setItem('allPlaylists',JSON.stringify(playlists))
  },[playlists]);

  

  return (
    <myContext.Provider
      value={{
        songs,
        setSongs,
        playlists,
        setPlaylists,
        add,
        setAdd,
        addToPlayList,
        removePlaylist,
        removeSong,
        linksHeight,
        setLinksHeight,
      }}
    >
      {props.children}
    </myContext.Provider>
  );
}

export default Context;
