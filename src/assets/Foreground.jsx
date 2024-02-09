import { motion } from "framer-motion"
import React, { useRef, useState, useEffect } from 'react'
import Cards from './Cards';
import { CgNotes } from "react-icons/cg";

let t ="";

function Foreground({elementColors, dragable}) {
  const [drag, setdrag] = useState("drag");

  const ref = useRef(null);
  const dat = [
    {
      dets:"You can add new tasks as a card in this portal from the input card.  You can also drag and drop the cards to reorder them. Select the color according to the importance of the Task",
      color:"red",
    },
  ]

  const changeDets = (val, prevData)=>{
    setdata(data.map((items)=>{
      if(items.dets === prevData)
      return {dets:  val, color:items.color}
      else 
      return items;
    }))
  }

  function removeCard(index){
    var decision = confirm("Are you sure you want to Delete the Task Card ?");
    if(decision)
    setdata(data.filter((_,i)=>i!=index));
  }

  const [color, setcolor] = useState("");
  const [data, setdata] = useState(() => {
    const storedData = localStorage.getItem("taskData");
    return storedData ? JSON.parse(storedData) : [];
  });
  useEffect(() => {
    localStorage.setItem("taskData", JSON .stringify(data));
  }, [data]);

  const colorChange = (e)=>{
    setcolor(e.target.value);
  }

  const [text, settext] = useState("");

  return (
    <div ref={ref} className='h-screen w-full fixed z-10 p-5 flex flex-wrap gap-5 overflow-y-scroll'>

      <motion.div {...(dragable ? { drag: true } : {})} dragConstraints={ref} className={`w-56 h-fit ${elementColors.inputCardBg} rounded-[20px] p-5 flex flex-col gap-3`}>
        <h1 className={`${elementColors.inputHead} px-1 py-1 font-bold text-lg`}>Input Card</h1>
        <input onChange={
          (e)=>{
            t = e.target.value;
            settext(t);
          }
        } value={text} className={`w-full border-2 rounded ${elementColors.inputBorder} ${elementColors.inputFieldBg} ${elementColors.inputText} py-1 px-2`} placeholder="Enter task here" type="text" />
        <div className="flex p-3 justify-evenly">
          <div className=" h-4 w-4 rounded-[50%] bg-red-600 flex justify-center items-center"><input name="imp" type="radio" value="red" onChange={colorChange} /></div>
          <div className=" h-4 w-4 rounded-[50%] bg-blue-600 flex justify-center items-center"><input name="imp" type="radio" value="blue" onChange={colorChange} /></div>
          <div className=" h-4 w-4 rounded-[50%] bg-green-600 flex justify-center items-center"><input name="imp" type="radio" value="green" onChange={colorChange} /></div>
        </div>
        <button onClick={
          ()=>{
            settext(t);
            settext("")
            
            if(text!="" && color!="")
            {
              setdata([...data,{dets:text, color:color}]);
              setcolor("")            }
            else alert("Please enter details.");
          }
        } className={`${elementColors.inputFieldBg} ${elementColors.saveText}  px-4 py-1 w-full mt-2 rounded border-2 ${elementColors.inputBorder}`}>Save</button>
      </motion.div>

      <motion.div {...(dragable ? { drag: true } : {})} dragConstraints={ref} whileDrag={{ scale: 1.05 }} className={`${elementColors.cardBg} h-72 w-56 rounded-[35px] ${elementColors.cardText} relative overflow-hidden`}>
        <div className="p-5 flex flex-col h-60 justify-around">
            <CgNotes size={15+"px"}/>
            <h1 className="leading-normal text-sm">You can add new tasks as a card in this portal from the input card.  You can also drag and drop the cards to reorder them. Select the color according to the importance of the Task</h1>
         </div>
        <div className={`h-12 w-full bg-red-600 absolute bottom-0 flex justify-center items-center`}>
            <h1 className=" text-zinc-100 font-sans">IMPORTANT</h1>
        </div>

      </motion.div>

      {data.map((items,index)=>(
        <Cards dragable={dragable} elementColors={elementColors} change={changeDets} b={ref} data={items} key={index} onDelete={()=>removeCard(index)}/>
      ))}

    </div>
  )
}

export default Foreground