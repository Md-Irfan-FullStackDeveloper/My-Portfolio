import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import myPic from '../assets/myPic.jpg'
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='home' className='w-full flex md:flex-col lg:flex-row jusitfy-center items-center h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, stranger! 👋 my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Md Irfan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Full Stack Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
          I’m a full-stack developer  passionate about building digital products
          that improve the everyday experience for people.
        </p>

        <div>
          <Link to='work' smooth={true} duration={500} >
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View Work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3 ' />
              </span>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <img src={myPic} className='hidden border-pink-600 border-4 mr-[2rem] rounded-full md:w-[250px] md:h-[250px] md:mt-[-50px] md:inline w-[350px] h-[350px] ' alt="myPic " />
      </div>
    </div>
  );
};

export default Home;
