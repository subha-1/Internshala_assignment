/* eslint-disable react/no-unescaped-entities */
import './Profile.css'
import { FaRegQuestionCircle } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="bg-[rgba(54,60,68,0.6)] py-4 px-10  rounded-2xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)] shadow-black relative">
        <div className='absolute left-[0.9rem] lg:top-[1rem]'>
          <FaRegQuestionCircle className='text-[#828A94]'/>
        </div>

        <div className='absolute left-[0.8rem] top-[7rem]'>
            <div className='grid grid-cols-2 gap-[0.1rem]'>
              <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
              <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
              <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
              <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
              <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
              <div className='bg-[#4A4E54] rounded-[1px] w-[0.4rem] h-[0.4rem]'></div>
            </div>
        </div>

      <div className="flex lg:flex-row flex-col lg:gap-0 gap-2 lg:justify-evenly justify-center items-center mb-4 bg-[#141414] text-[#A3ADB2] p-[0.3rem] rounded-2xl">
        <button className=" bg-[#1D1D1D] hover:bg-[#28292F] lg:w-[9rem] w-[12rem] hover:w-[10rem] hover:shadow-[20px_20px_50px_0_rgba(0,0,0,1),10px_10px_40px_0_rgba(0,0,0,0.1)] hover:shadow-black h-[2rem] px-2 rounded-xl hover:text-[#FFFFFF] focus:outline-none">
          About Me
        </button>
        <button className=" bg-[#1D1D1D] hover:bg-[#28292F] lg:w-[9rem] w-[12rem] hover:w-[10rem] hover:shadow-[20px_20px_50px_0_rgba(0,0,0,1),10px_10px_40px_0_rgba(0,0,0,0.1)] hover:shadow-black h-[2rem] px-2 rounded-xl hover:text-[#FFFFFF] focus:outline-none">
          Experiences
        </button>
        <button className="bg-[#1D1D1D] hover:bg-[#28292F] lg:w-[9rem] w-[12rem] hover:w-[10rem] hover:shadow-[20px_20px_50px_0_rgba(0,0,0,1),10px_10px_40px_0_rgba(0,0,0,0.1)] hover:shadow-black h-[2rem] px-2 rounded-xl hover:text-[#FFFFFF] focus:outline-none">
          Recommended
        </button>
      </div>

      <div className=" text-[#7C7C7C] lg:py-4 max-h-[8rem] overflow-y-scroll custom-scrollbar">
        <p className="text-sm leading-snug">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p className="mt-4 text-sm leading-snug ">
        I was born and raised in Albany, NY, and have been living in Santa Carla for the past 10 years with my wife Tiffany and our 4-year-old twin daughters, Emma and Ella. It's been an amazing journey watching our girls grow up in this vibrant community. Emma loves to paint, while Ella is fascinated with anything that involves building and construction. They both just started school, and it's a joy to see how excited they are about learning and making new friends.

        As they settle into their new routine, I've adjusted my schedule to make sure I'm there for them in the mornings. This means my calendar is usually blocked between 9–10 AM, so I can drop them off at school and spend a bit of quality time with them before diving into my workday. My family is my top priority, and these moments in the morning are incredibly precious to me. Balancing work and family can be challenging, but it's all worth it to see the smiles on their faces every day.
        </p>
      </div>
    </div>
  );
};

export default Profile;
