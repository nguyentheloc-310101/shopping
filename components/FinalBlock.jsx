import React from 'react';

const FinalBlock = () => {
  return (
    <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold">
          Online Shopping Makes You So Happy
        </h3>
        <p className="pt-4">
          Online shopping is more than a hobby for those who get a thrill out of
          traversing the biggest mall in the world: the internet. It’s also a
          sport.
        </p>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="row-span-2 object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1555529771-835f59fc5efe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
        <img
          className="object-cover w-full h-full"
          src="https://images.unsplash.com/photo-1520006403909-838d6b92c22e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb24lMjBjbG90aGVzfGVufDB8MHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
          alt="/"
        />
      </div>
    </div>
  );
};

export default FinalBlock;
