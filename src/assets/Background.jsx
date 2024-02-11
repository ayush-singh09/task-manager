import React from 'react'

const Background = ({elementColors}) => {
  return (
    <div className={`${elementColors.background} w-full h-screen fixed z-0`}>
      <div className="w-24 h-60 rotate-45 rounded-[100px] absolute bg-sky-300 right-[50%] top-[50%] translate-y-[-50%] flex justify-center items-start blur-3xl"></div>
      <div className="w-24 h-60 rotate-45 rounded-[100px] absolute bg-red-300 left-[50%] top-[50%] translate-y-[-50%] flex justify-center items-start blur-3xl"></div>
      <h1 className={`${elementColors.Notes} text-lg absolute left-[50%] translate-x-[-50%] top-10`}>Notes.</h1>
      <h1 className={`${elementColors.Docs} docs font-bold text-9xl absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] drop-shadow-lg`}>Docs.</h1>
    </div>
  )
}

export default Background;