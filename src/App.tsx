import React from 'react';
import './App.css';
import profile from './profile.jpg'
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from "react-icons/fa";

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
                RESUME
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
        <div className='w-full absolute top-16 sm:top-1/4 grid sm:grid-cols-12 grid-cols-8 gap-4'  >
          <div className='sm:col-start-4 sm:col-span-2 col-start-2 col-span-6'>
            <div className='w-full h-full'>
              <div className="max-w-xs h-full bg-[#f4ece6] shadow-md rounded-lg overflow-hidden">
                <div className='my-6'>
                  <img className="w-48 h-48 rounded-full mx-auto" src={profile} alt="Card Image" />
                </div>
                <div className="grid justify-items-center mb-5">
                  <div className='text-3xl font-extrabold font-sans text-gray-800 tracking-wide'>Manikandan</div>
                  <div className='text-3xl font-extrabold font-sans text-gray-800 tracking-wide'>Shanmugam</div>
                </div>
                <div className="grid justify-items-center mb-5">
                  <div className=" flex flex-grow border-t h-1 w-20 border-red-400"></div>
                </div>
                <div className="grid justify-items-center mb-6">
                  <p className="text-gray-600 tracking-widest font-semibold uppercase">Senior Software Engineer</p>
                </div>
                <div className='grid content-center h-20 bg-white '>
                  <div className='grid h-full grid-flow-col justify-items-center'>
                    <div>
                      <a data-testid="linkElement" href="https://www.instagram.com/makshavi/" target="_blank">
                        <FaInstagram size={24}>  </FaInstagram>
                      </a>
                    </div>
                    <div>
                      <a data-testid="linkElement" href="https://www.linkedin.com/in/maksha/" target="_blank">
                        <FaLinkedinIn size={24} />
                      </a>
                    </div>
                    <div>
                      <a data-testid="linkElement" href="https://wa.me/6583135769" target="_blank">
                        <FaWhatsapp size={24} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sm:col-start-6 sm:col-span-3 col-start-2 col-span-6 mt-6 ml-3'>
            <div className='grid  my-4'>
              <p className='sm:text-8xl text-5xl font-bold'>Hello</p>
            </div>
            <div className='grid my-9 '>
              <p className='sm:text-2xl text-xl font-semibold'>Here's who I am & what I do</p>
            </div>
            <div className='grid grid-flow-col grid-cols-8 gap-2'>
              <button className="rounded-full w-32 bg-[#0050ff] text-white">RESUME</button>
              <button className="rounded-full col-start-4 w-32 py-3 border-solid border-2 border-black">PROJECTS</button>
            </div>
            <div className='mt-10'>
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
              </p>
            </div>
            <div className='mt-6'>
              <p>
                I’m a great place for you to tell a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;