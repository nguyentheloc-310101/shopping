import { Button } from '@material-tailwind/react';
import React from 'react';

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
          <p>Fashion</p>
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">
            A fresh approach to shopping.
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">
            Present time technologies have increased the ease of access for
            consumers to shop online
          </p>
          <Button className="bg-white text-black ">Shop Now</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
