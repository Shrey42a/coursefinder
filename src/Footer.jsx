import React from 'react';

function Footer() {
    return (
        <>
            <div className="h-max relative lg:-bottom-24 -bottom-8 w-full py-2 text-black fnt lp backdrop-blur border-t border-lime-400">
                <ul className="flex cursor-pointer w-full flex-col items-center justify-center space-y-4 py-4 lg:flex-row lg:space-x-10 lg:space-y-0">
                    <li className="text-sm font-bold uppercase transition ease-in-out hover:text-gray-50"><a>Home</a></li>
                    <li className="text-sm font-bold uppercase transition ease-in-out hover:text-gray-50"><a>About Us</a></li>
                    <li className="text-sm font-bold uppercase transition ease-in-out hover:text-gray-50"><a>Contact us</a></li>
                </ul>
                <h1 className="text-md text-center font-semibold ">Made By Shrey Kumar At <a target="blank" href="https://codeyogi.io/" title="Visit Codeyogi" className="text-cyan-500 cursor-pointer">Codeyogi Labs</a></h1>
                <div className="flex flex-col items-center justify-center space-y-2 py-4">
                    <h1 className="text-center ">
                        Copyright. &#169; 2025 <span className="text-cyan-500"><a href="#home">Professional Course Finder...</a></span> BIS
                    </h1>
                    <p className="text-center ">Every item on this website has been made with very hard work.If you copy anything we will hunt you down.</p>
                </div>
            </div>
        </>
    )
}
export default Footer