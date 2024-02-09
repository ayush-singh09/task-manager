import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
var text = "";

function Edit({lala, edit, elementColors}) {

    const [textData, settextData] = useState("");

    const editText = ()=>{
        lala(textData);
        settextData("");
        text="";
    }

  return (
    <div className='w-full h-full flex flex-col justify-center items-center backdrop-blur absolute z-4 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <button className="absolute top-8 left-5" onClick={()=>{edit([])}}><RxCross2 /></button>
        <input value={text} onChange={
            (e)=>{
                text= e.target.value;
                settextData(text);
            }
        } className={`w-[90%] border-2 rounded ${elementColors.inputBorder} ${elementColors.inputFieldBg} ${elementColors.inputText} py-1 px-2`} type="text" placeholder='Enter Updated Text' />
        <button onClick={editText} className={`${elementColors.inputFieldBg} ${elementColors.saveText}  px-4 py-1 w-[90%] mt-2 rounded border-2 ${elementColors.inputBorder}`}>Save</button>
    </div>
  )
}

export default Edit