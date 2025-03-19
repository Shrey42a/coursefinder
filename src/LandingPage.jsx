import React, { useState } from "react";
import { Link } from "react-router-dom";
import { courses } from "./data.js"

function LandingPage(){
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const uniqueCategories = [...new Set(courses.map((course) => course.category))];
  const uniquePrices = [...new Set(courses.map((course) => course.price))];

 const filteredCourses = courses.filter((course) => {
    return (
      (selectedCategory ? course.category === selectedCategory : true) &&
      (selectedPrice ? course.price === selectedPrice : true)
    );
  });

  const handleSendData = () => {
    localStorage.setItem("sharedData", JSON.stringify(filteredCourses));
  };

 return(
    <>
 <div className="lp space-y-10 top-20 lg:top-24 relative flex rounded-md flex-col justify-evenly h-max w-4/5 lg:w-1/3 p-4">
 <h1 className="text-center text-xl tracking-wider font-semibold text-black uppercase">Professional Course Finder</h1>
  <div className="flex flex-col justify-start space-y-6 h-3/4 w-full">
  <div className="flex flex-col space-y-1">
  <label htmlFor="name" className="left-1">Select Topic :</label>
  <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="select py-2 px-4 rounded-md lp focus:outline-none cursor-pointer">
  <option value="">Select Topic</option>
  {uniqueCategories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
  </select>
  </div>
  <div className="flex flex-col space-y-1">
  <label className="left-1 relative">Filter By :</label>
  <select  value={selectedPrice} onChange={(e) => setSelectedPrice(e.target.value)} className="select py-2 px-4 rounded-md lp focus:outline-none cursor-pointer">
  <option value="">Select Price</option>
  {uniquePrices.map((price, index) => (
            <option key={index} value={price}>
              {price}
            </option>
          ))}
  </select>
  </div>
  <Link onClick={() => handleSendData()} to="/courses" className="flex items-center justify-center w-full">
      <button className="w-full cursor-pointer btn text-center rounded-lg px-4 py-2 fnt font-semibold text-black">Find course</button>
  </Link>
  <h1 className='text-xl text-center tracking-wide'>Find Best & Free Courses on many job <br></br> oriented topics by industry experts.</h1>
  </div>
 </div>
 </>
 )
}
export default LandingPage;