import React from "react";
import {Link} from "react-router-dom";

function Navbar(){

    function themeChanger() {
        let element = document.body;
        element.classList.toggle("premium");
     }

    return(
        <>
        <section className="h-max w-full overflow-hidden bdb flex items-center justify-between lg:px-8">
                <Link to="/" className="flex flex-row justify-center items-center h-max w-max cursor-pointer">
                    <img src='/st.svg' className='lg:h-20 lg:w-20 w-16 h-16 scale-75'></img>
                    <h1 className="text-2xl lg:block hidden tracking-wider font-semibold text-black uppercase">Professional Course Finder</h1>
                </Link>
                <div className='lg:p-2 p-1 w-2/4'>
                    <ul className='text-md flex uppercase space-x-3 lg:space-x-4 items-center flex-row justify-end font-normal text-neutral-800'>
                        <Link className='w-max' to="/about">
                            <button className="btn px-1 rounded-lg lg:text-lg text-xs lg:px-4 py-2 fnt font-semibold text-black">
                               About
                            </button>
                        </Link>
                        <Link to="/contact">
                        <button className="btn px-1 rounded-lg lg:px-4 py-2 fnt lg:text-lg text-xs truncate font-semibold text-black">
                           Contact us
                        </button>
                        </Link>
                        <button title="Change Theme to Premium" onClick={themeChanger} id="theme" className="btn  text-xs shadow-md shadow-zinc-800 rounded-lg px-1 lg:px-4 py-2 fnt font-semibold text-black">Theme</button>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Navbar;