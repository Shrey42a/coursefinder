import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <>
            <Link to="/" className='relative top-20 lg:top-24 -ml-96 mr-8 lg:-ml-96 lg:right-96'><img src='/bck.svg' className='lg:h-10 lg:w-10 w-5 h-5 scale-75'></img></Link>
            <div className='lp relative top-4 lg:top-12 justify-center flex flex-row space-x-2 p-2 w-4/5 lg:w-2/3 rounded-md h-max lg:h-3/5'>
                <div className='h-full w-full p-2 flex flex-col lg:flex-row items-center justify-center'>
                    <div className='lg:h-4/5 lg:w-1/2 h-full w-full rounded-lg flex flex-col items-center justify-center space-y-2'>
                        <h1 className='lg:text-3xl text-lg fnt text-neutral-600 font-thin tracking-widest'>SHREY KUMAR</h1>
                        <h2 className='text-lg text-neutral-600 lg:text-start text-center'>Hello</h2>
                        <p className='text-lg text-neutral-600 lg:text-start text-center'>I am Shrey Kumar, persuing MCA from Meerut College.I am from a village called Saidpur in Bulandshahar District, Uttar Pradesh. I'd love coding and wants to learn more and more, my hobies are playing a lot of sports and eager to learn something new daily.My strengths are Loneliness,Patience.</p>
                        <button className='px-8 py-2 rounded-md shadow-sm shadow-zinc-800'>Learn More.</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default About;