import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import Content from "./Components/Content";

function App() {

  return (
    <div className="bg-zinc-900 w-full h-screen p-3 flex flex-col gap-3">
      <NavBar />
      <Content/>
    </div>
  );
}

export default App;
