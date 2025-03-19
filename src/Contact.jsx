import React from "react";
import { Link } from "react-router-dom";

function Contact(){
    return(
        <>
        <Link to="/" className='relative top-20 lg:top-24 -ml-96 mr-8 lg:-ml-96 lg:right-96'><img src='/bck.svg' className='lg:h-10 lg:w-10 w-5 h-5 scale-75'></img></Link>
         <div className="lp relative top-4 lg:top-12 rounded-md lg:w-3/4 w-4/5 h-max flex flex-col-reverse lg:flex-row justify-evenly px-2 py-2 lg:space-y-0 lg:space-x-2">
            <div className="lg:w-3/5 w-full flex flex-col justify-evenly items-center rounded-md">
                <h1 className="text-neutral-600 text-center font-mono">You can contact me anytime between 9am to 10am...</h1>
                <h1 className="font-mono text-center text-neutral-600">Call me at <span className="text-blue-900 cursor-pointer font-mono">+91 89799*****</span></h1>
                <h1 className="font-mono text-neutral-600 text-center">You can move to<span className="text-blue-900 cursor-pointer"> FAQs</span> or <span className="text-blue-900 cursor-pointer">Support</span> page to get more information about our site.</h1>
            </div>
            <div className="lg:w-2/5 w-full h-full rounded-md">
            <h2 className="text-neutral-600 font-mono text-lg uppercase">Get in touch</h2>
                        <h1 className="text-xl font-mono text-neutral-600">Send me a message</h1>
                        <div className="w-full space-y-2">
                            <div className="flex flex-col space-y-1 h-max">
                                <label htmlFor="name" className="text-neutral-600 cursor-pointer ml-2">Name*</label>
                                <input
                                    id="name"
                                    name="name"

                                    placeholder="Your name*"
                                    className="caret-lime-400 text-neutral-600 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/30" />

                            </div>
                            <div className="flex flex-col space-y-1 h-max">
                                <label htmlFor="email" className="text-neutral-600 cursor-pointer ml-2">Email*</label>
                                <input
                                    id="email"
                                    name="email"

                                    placeholder="Your email*"
                                    className="caret-lime-400 text-neutral-600 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/30" />

                            </div>
                            <div className="flex flex-col space-y-1 h-max">
                                <label htmlFor="message" className="ml-2 text-neutral-600 cursor-pointer">Message*</label>
                                <textarea
                                    id="message"
                                    name="message"

                                    placeholder="Message*"
                                    className="caret-lime-400 text-neutral-600 accent-gray-400 w-full rounded-lg px-4 p-2 bg-white/30" />

                            </div>
                            <div className="flex lg:justify-start justify-center items-center space-x-2">
                                <button type="button" className="px-6 py-2 rounded-lg shadow-sm btn">Submit</button>
                                <button type="button" className="px-6 py-2 rounded-lg shadow-sm btn">Reset</button>
                            </div>
                        </div>
            </div>
         </div>
        </>
    )
}
export default Contact;