import { useEffect, useState } from 'react';
import Background from './assets/Background'
import Foreground from './assets/Foreground'
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import { TbDragDrop } from "react-icons/tb";
import { TbDragDrop2 } from "react-icons/tb";

function App() {
  const [mode, setmode] = useState(()=>{
    const  modeValue = localStorage.getItem('theme');
    if(modeValue!=null){
      return JSON.parse(modeValue);
    }
    return true;
  });

  useEffect(()=>{
    localStorage.setItem('theme', JSON.stringify(mode));
  },[mode])


  
  const [dragable, setdragable] = useState(()=>{
    const status = localStorage.getItem('draggable');
    return status ?  JSON.parse(status) : true;
  });
  
  useEffect(()=>{
    localStorage.setItem("draggable", JSON.stringify(dragable));
  },[dragable]);


const [elementColors, setelementColors] = useState({
  background: "bg-zinc-800",
  Docs:"text-zinc-900",
  Notes:"text-zinc-400",
  cardBg:"bg-zinc-900",
  cardText:"text-white",
  inputCardBg:"bg-zinc-700",
  inputHead:"text-zinc-900",
  inputFieldBg:"bg-zinc-800",
  inputBorder:"border-zinc-500",
  saveButton:"border-zinc-800",
  saveButtonBorder:"border-zinc-500",
  inputText:"text-zinc-300",
  saveText:"text-zinc-300",
  optionColor:{
    background:"bg-zinc-300",
    text:"text-zinc-900"
  }
});


const [modeIcon, setmodeIcon] = useState(<MdOutlineLightMode/>)

const changeTheme = ()=>{
  setmode((prev)=>!prev);
  if(mode)
  {setelementColors({
    background: "bg-zinc-800",
    Docs:"text-zinc-900",
    Notes:"text-zinc-400",
    cardBg:"bg-zinc-900",
    cardText:"text-white",
    inputCardBg:"bg-zinc-700",
    inputHead:"text-zinc-900",
    inputFieldBg:"bg-zinc-800",
    inputBorder:"border-zinc-500",
    saveButton:"bg-zinc-800",
    saveButtonBorder:"border-zinc-500",
    inputText:"text-zinc-300",
    saveText:"text-zinc-300",
    optionColor:{
      background:"bg-zinc-300",
      text:"text-zinc-900"
    }
  });setmodeIcon(<MdOutlineLightMode/>)}
  else {setelementColors({
    background: "bg-zinc-100",
    Docs:"text-zinc-300",
    Notes:"text-zinc-400",
    cardBg:"bg-zinc-300",
    cardText:"text-zinc-800",
    inputCardBg:"bg-zinc-300",
    inputHead:"text-zinc-400",
    inputFieldBg:"bg-zinc-200",
    inputBorder:"border-zinc-400",
    saveButton:"bg-zinc-200",
    saveButtonBorder:"border-zinc-400",
    inputText:"text-zinc-500",
    saveText:"text-zinc-500",
    optionColor:{
      background:"bg-zinc-800",
      text:"text-zinc-300"
    }
  });setmodeIcon(<MdOutlineDarkMode />)}
}

  return (
    <div className='relative'>
      
      <div className='absolute z-20 top-3 right-7 flex gap-5'>
        <button className={`${elementColors.optionColor.background} ${elementColors.optionColor.text} p-2 rounded text-xl`}
        onClick={()=>{
          if(dragable)
          setdragable(false);
          else setdragable(true)
        }}>
          {dragable?<TbDragDrop />:<TbDragDrop2 />}
        </button>

        <button className={`${elementColors.optionColor.background} ${elementColors.optionColor.text} p-2 rounded text-xl`}
        onClick={()=>{
          changeTheme();
        }}>
          {modeIcon}
          
        </button>
      </div>

      <Background elementColors={elementColors}/>
      <Foreground dragable={dragable} elementColors={elementColors}/>
    </div>
    
  )
}

export default App