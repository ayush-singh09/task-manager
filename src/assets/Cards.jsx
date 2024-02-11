import { motion } from "framer-motion"
import { RxCross2 } from "react-icons/rx";
import { BsPencilSquare } from "react-icons/bs";
import Edit from "./Edit";
import { useState } from "react";

function Cards({data, b, onDelete, change, elementColors, dragable}) {

  const [edit, setedit] = useState([]);
  
  const dataCame = (val)=>{
    change(val, data.dets);
    setedit([]);
  }
  const handleEditTask = ()=>{
      setedit([{prev:data.dets}]);
  }

  return (
    <motion.div {...(dragable ? { drag: true } : {})} dragConstraints={b} whileDrag={{ scale: 1.05 }} className={`${elementColors.cardBg} card h-72 w-56 rounded-[35px] ${elementColors.cardText} relative overflow-hidden`}>
        <div className="inside p-5 flex flex-col h-[84%] justify-around">
            <div className="flex h-[16%]  w-full justify-between items-center">
              <button><BsPencilSquare onClick={handleEditTask} size={15+"px"}/></button>
              <button onClick={onDelete} className=""><RxCross2 /></button>
            </div>
            
            {edit.map((item, index)=>(
              <Edit elementColors={elementColors} data={item.prev} edit={setedit} key={index} lala={dataCame}/>
            ))}

            <h1 className="details h-[84%] w-full flex text-[13px] items-center leading-normal text-sm">{data.dets}</h1>
        </div>
        <div className={`h-[16%]  w-full bg-${data.color}-600 absolute bottom-0 flex justify-center items-center`}>
            <h1 className=" text-zinc-100 font-sans">{(data.color!="red")?data.color=="blue"?"LESS IMPORTANT":"NOT IMPORTANT":"IMPORTANT"}</h1>
        </div>
    </motion.div>
  )
}

export default Cards