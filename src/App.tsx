import React from 'react';
import './App.css';

function App() {
  return (
    <div className='w-full h-full' >
      <div className='w-full flex flex-row' >
        <div className='w-3/6 h-32 flex items-center'>
          <div className='mx-3 flex flex-row'>
            <p className="text-2xl font-bold">
              Manikandan Shanmugam
            </p>
            <p className="text-2xl mx-1">
              /
            </p>
            <p className="text-sm flex items-center">
              Senior Software Engineer
            </p>
          </div>
        </div>
        <div className='w-3/6 h-32  flex content-center' >
          <div className='flex w-full items-center justify-end mr-20'>
            <div>
              <p className="text-sm px-4">
                ABOUT ME
              </p>
            </div>
            <div>
              <p className="text-sm px-4">
                PROJECT
              </p>
            </div>
            <div>
              <p className="text-sm px-4">
                CONTACT
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-screen relative'>
        <div className='h-full flex flex-row'>
          <div className='w-full sm:w-2/5 h-full flex bg-[#e6dace]' ></div>
          <div className='w-0 sm:w-3/5  h-full' ></div>
        </div>
        <div className='w-full absolute top-1/4 left-0 grid grid-cols-6' >
          <div className='col-start-3 col-span-2'>
            <div className=''>
              <div className="max-w-xs bg-[#f4ece6] shadow-md rounded-lg overflow-hidden">
                <img className="object-cover h-48 w-full" src="image.jpg" alt="Card Image" />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800 mb-2">Card Title</h3>
                  <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.</p>
                  <div className="mt-4">
                    <a href="#" className="text-blue-500 font-medium">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
