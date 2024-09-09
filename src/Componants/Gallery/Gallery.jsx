import { useState } from "react";
import img from './../../assets/image.png';
import { FaArrowLeft, FaRegQuestionCircle, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  // State to hold the images
  const [images, setImages] = useState([img, img, img]);

  // Function to add a new image
  const addImage = () => {
    setImages([...images, img]); // Adds the default image, you can modify it to add new images dynamically
  };

  return (
    <div className="mt-[1.3rem] bg-[rgba(54,60,68,0.6)] py-4 px-10 rounded-2xl shadow-[5px_5px_5px_0_rgba(0,0,0,0.5)] shadow-black relative">
      <div className='absolute left-[0.9rem] top-[1rem]'>
        <FaRegQuestionCircle className='text-[#828A94]' />
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

      <div className="flex lg:flex-row flex-col lg:gap-0 gap-3 lg:p-0 p-[0.3rem] justify-between items-center mb-4">
        <button className="bg-[#171717] text-white py-3 px-7 rounded-2xl">
          Gallery
        </button>
        <div className="flex items-center space-x-6">
          {/* ADD IMAGE Button */}
          <button
            onClick={addImage}
            className="bg-[#40464D] hover:bg-[#5a5e63] shadow-[inset_0px_2px_2px_0px_rgba(255,255,255,0.2),2px_3px_7px_0_rgba(0,0,0,0.8),-1px_-1px_4px_0_rgba(255,255,254,0.4)] text-[0.7rem] font-semibold text-white py-2 px-4 rounded-full"
          >
            + ADD IMAGE
          </button>
          <button className="bg-[#1D1F22] shadow-[-5px_-4px_10px_0_rgba(255,255,254,0.3),5px_5px_8px_0_rgba(0,0,0,0.7)]  text-[#40464D] p-2 rounded-full">
            <FaArrowRight />
          </button>
          <button className="bg-[#1D1F22] shadow-[-5px_-4px_10px_0_rgba(255,255,254,0.3),5px_5px_8px_0_rgba(0,0,0,0.7)]  text-[#40464D] p-2 rounded-full">
            <FaArrowLeft />
          </button>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="flex lg:flex-row flex-col lg:justify-around justify-center items-center lg:gap-0 gap-4 lg:space-x-4 mt-8">
        {images.map((image, index) => (
          <div key={index} className="lg:w-[10rem] lg:h-[10rem] rounded-2xl">
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="object-cover w-full h-full rounded-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;