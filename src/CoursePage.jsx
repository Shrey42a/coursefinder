import React from "react";
import { Link } from "react-router-dom";

function CoursePage(){

    const storedData = JSON.parse(localStorage.getItem("sharedData"));

    return(
        <>
        <Link to="/" className='lg:relative -top-10 lg:top-1 -ml-56 lg:-ml-96 lg:right-96'><img src='/bck.svg' className='lg:h-10 lg:w-10 w-5 h-5 scale-75'></img></Link>
        <div className="lp lg:relative rounded-md -top-20 flex flex-wrap gap-2 justify-evenly w-full lg:w-4/5 p-2 lg:p-4 h-max">
        {storedData.map((key) => (
            <div key={key.id} className="rounded-md pb-4 bdb overflow-hidden shadow-lg shadow-gray-500 flex flex-col space-y-2 w-80">
             <a className="w-full h-1/2" href={key.link} target="_blank"><img src={key.image} className="imgg w-full cursor-pointer hover:scale-105 duration-400 transition ease-in-out h-full rounded-t-md rounded-b-sm" /></a>
             <div className="flex flex-col space-y-2 items-start justify-evenly px-3 py-1">
               <h1 className="text-xs">Category : {key.category}</h1>
               <h1 className="text-2xl">{key.name}</h1>
               <h1>Provider : {key.provider}</h1>
               <h1>Duration : {key.duration}</h1>
               <h1>Price : {key.price}</h1>
               <a target="_blank" href={key.link}><button className="bg-gray-200 cursor-pointer btn shadow-md shadow-zinc-500 rounded-md px-2 py-2">More Details</button></a>
             </div>
            </div>
        ))}
        </div>
        </>
    )
}
export default CoursePage;