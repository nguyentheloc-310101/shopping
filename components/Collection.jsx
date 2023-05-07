import React from 'react';

const Collection = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      {/* Left Side */}
      <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1463100099107-aa0980c362e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFzaGlvbiUyMGNsb3RqfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1484327973588-c31f829103fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGNsb3RqfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1531603997864-2023cd7130d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8MzM1NjU3Nnx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-3 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1511511450040-677116ff389e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmFzaGlvbiUyMGNsb3RoZXN8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
      {/* Right Side */}
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Make your own fashion collection
        </h3>
        <p className="text-2xl py-6">
          Some pass through the big fashion catwalks, others go straight to
          store shelves. But what is a fashion collection anyway
        </p>
        <p className="pb-6">
          The conceptual collections are intended to highlight the theme worked
          on, to explore a concept, ideas, and other inspirations from the
          designer at the time of conception of the work
        </p>
        <div>
          <button className="border-black mr-4 hover:shadow-xl">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Collection;
