import React from 'react';
import { HiMiniArrowRightCircle } from "react-icons/hi2";


const SubmitButton = ({ text }) => {
  return (
    <button type="submit" className='bg-dark_blue flex justify-between items-center p-1 pl-2 text-black rounded-full mt-4'>
      <h1 className='text-black ml-3 text-xl'>{text}</h1>
      <HiMiniArrowRightCircle className='text-4xl text-white'/>
    </button>
  );
};

export default SubmitButton;