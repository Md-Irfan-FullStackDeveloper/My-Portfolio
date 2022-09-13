import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import realEstate from "../assets/realestate.jpg";
import Slider from "react-slick";
import { GoMarkGithub } from "react-icons/go";
import { FaRegEye } from "react-icons/fa";

// BeautyBebo images
import beautyBebo1 from "../assets/beautyBebo/beautyBebo-1.JPG";
import beautyBebo2 from "../assets/beautyBebo/beautyBebo-2.JPG";
import beautyBebo3 from "../assets/beautyBebo/beautyBebo-3.JPG";
import beautyBebo4 from "../assets/beautyBebo/beautyBebo-4.JPG";
import beautyBebo5 from "../assets/beautyBebo/beautyBebo-5.JPG";
import beautyBebo6 from "../assets/beautyBebo/beautyBebo-6.JPG";
import beautyBebo8 from "../assets/beautyBebo/beautyBebo-8.JPG";
import beautyBebo9 from "../assets/beautyBebo/beautyBebo-9.JPG";

// TheOutnet images
import outnet1 from "../assets/outnet/outnet-1.JPG";
import outnet2 from "../assets/outnet/outnet-2.JPG";
import outnet3 from "../assets/outnet/outnet-3.JPG";
import outnet4 from "../assets/outnet/outnet-4.JPG";
import outnet5 from "../assets/outnet/outnet-5.JPG";

// Expedia images
import expedia1 from "../assets/expedia/expedia-1.jpeg";
import expedia2 from "../assets/expedia/expedia-2.jpeg";
import expedia3 from "../assets/expedia/expedia-3.jpeg";
import expedia4 from "../assets/expedia/expedia-4.jpeg";
import expedia5 from "../assets/expedia/expedia-5.jpeg";

const crausalSetting = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  arrows: false,
};

const Work = () => {
  return (
    <div name="work" className="w-100% md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Projects
          </p>
          <p className="py-6">Check out some of my recent projects</p>
        </div>

        {/* Projects container */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 sm:grid-cols-1 text-gray-300 ">
          {/* card 1 */}
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] p-4 rounded-lg">
            {/* slider */}
            <div>
              <h1 className="text-xl text-white my-2 font-semibold">
                BeautyBebo.com Clone
              </h1>
              <Slider {...crausalSetting}>
                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo1}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo2}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo3}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo4}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo5}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo6}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo8}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={beautyBebo9}
                    width="100%"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            {/* details */}
            <div>
              <div className="px-3">
                <h3 className="text-lg underline text-white-600">
                  Tech Stacks
                </h3>
                <p className="text-sm my-2 ">HTML, CSS, JavaScript</p>
              </div>

              <div className="px-3">
                <p className="leading-5 tracking-wider text-justify text-sm justify">
                  This website provide different types and brands beauty care
                  products at one place to its users.
                </p>
              </div>

              {/* button */}
              <div className="flex gap-2 justify-evenly my-5 items-center">
                <a
                  href="https://github.com/Md-Irfan-FullStackDeveloper/BeautyBebo-Clone"
                  target="blank"
                >
                  <button className="flex py-2 px-4 jusity-center gap-3 rounded-md hover:bg-[#FF577F] items-center bg-[#C70039]	 ">
                    {" "}
                    <GoMarkGithub size={25} /> Github
                  </button>
                </a>

                <a
                  href="https://delightful-duckanoo-17fff8.netlify.app/"
                  target="blank"
                >
                  <button className="flex py-2 px-4 jusity-center gap-3 rounded-md hover:bg-[#FF577F] items-center bg-[#C70039]	 ">
                    {" "}
                    <FaRegEye size={25} /> View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card 2 */}
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] p-4 rounded-lg">
            {/* slider */}
            <div>
              <h1 className="text-xl text-white my-2 font-semibold">
                TheOutnet Clone
              </h1>
              <Slider {...crausalSetting}>
                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={outnet1}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={outnet2}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={outnet3}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={outnet4}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={outnet5}
                    width="100%"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            {/* details */}
            <div>
              <div className="px-3">
                <h3 className="text-lg underline text-white-600">
                  Tech Stacks
                </h3>
                <p className="text-sm my-2 ">HTML, CSS, JavaScript</p>
              </div>

              <div className="px-3">
                <p className="leading-5 tracking-wider text-justify text-sm justify">
                  TheOutnet is an foreign E-commerce website which provides
                  fashionable clothes and accessories to it's users at one place
                </p>
              </div>

              {/* button */}
              <div className="flex gap-2 justify-evenly my-5 items-center">
                <a
                  href="https://github.com/Md-Irfan-FullStackDeveloper/TheOutnet-Clone"
                  target="blank"
                >
                  <button className="flex py-2 px-4 jusity-center gap-3 rounded-md hover:bg-[#FF577F] items-center bg-[#C70039]	 ">
                    {" "}
                    <GoMarkGithub size={25} /> Github
                  </button>
                </a>

                <a
                  href="https://beamish-bunny-aa80d6.netlify.app/"
                  target="blank"
                >
                  <button className="flex py-2 px-4 jusity-center gap-3 rounded-md hover:bg-[#FF577F] items-center bg-[#C70039]	 ">
                    {" "}
                    <FaRegEye size={25} /> View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card 3 */}
          <div className="bg-[#0a192f] shadow-md shadow-[#040c16] p-4 rounded-lg">
            {/* slider */}
            <div>
              <h1 className="text-xl text-white my-2 font-semibold">
                Expedia.com Clone
              </h1>
              <Slider {...crausalSetting}>
                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={expedia1}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={expedia2}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={expedia3}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={expedia4}
                    width="100%"
                    alt=""
                  />
                </div>

                <div className="rounded-lg">
                  <img
                    className="rounded-md"
                    src={expedia5}
                    width="100%"
                    alt=""
                  />
                </div>
              </Slider>
            </div>
            {/* details */}
            <div>
              <div className="px-3">
                <h3 className="text-lg underline text-white-600">
                  Tech Stacks
                </h3>
                <p className="text-sm my-2 ">
                  React.js, Chakra UI, React-Redux, React-Icons
                </p>
              </div>

              <div className="px-3">
                <p className="leading-5 tracking-wider text-justify text-sm justify">
                  This website provide the travelling flight tickets and hotel
                  locations or vacational tours to their customer.
                </p>
              </div>

              {/* button */}
              <div className="flex gap-2 justify-evenly my-5 items-center">
                <a
                  href="https://github.com/Md-Irfan-FullStackDeveloper/Expedia-clone"
                  target="blank"
                >
                  <button className="flex py-2 px-4 jusity-center gap-3 rounded-md hover:bg-[#FF577F] items-center bg-[#C70039]	 ">
                    {" "}
                    <GoMarkGithub size={25} /> Github
                  </button>
                </a>

                <a
                  href="https://expedia-tawny.vercel.app/?city="
                  target="blank"
                >
                  <button className="flex py-2 px-4 jusity-center gap-3 rounded-md hover:bg-[#FF577F] items-center bg-[#C70039]	 ">
                    {" "}
                    <FaRegEye size={25} /> View
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* card 4 */}
        </div>
      </div>
    </div>
  );
};

export default Work;
