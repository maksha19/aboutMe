import React, { useState } from 'react';
import './App.css';
import ProjectPage from './subPage/projectPage';
import HomePage from './subPage/homePage';
import ResumePage from './subPage/resumePage';
import ContactPage from './subPage/contactPage';

function App() {

  const [state, setState] = useState<"HOME" | "RESUME" | "PROJECT" | "CONTACT">('HOME')

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
            <div className='hover:cursor-pointer hover:text-blue-700' onClick={() => setState('HOME')}>
              <p className="text-sm px-4">
                ABOUT ME
              </p>
            </div>
            <div className='hover:cursor-pointer hover:text-blue-700' onClick={() => setState('RESUME')}>
              <p className="text-sm px-4">
                RESUME
              </p>
            </div>
            <div className='hover:cursor-pointer hover:text-blue-700' onClick={() => setState('PROJECT')}>
              <p className="text-sm px-4">
                PROJECT
              </p>
            </div>
            <div className='hover:cursor-pointer hover:text-blue-700' onClick={() => setState('CONTACT')}>
              <p className="text-sm px-4">
                CONTACT
              </p>
            </div>
          </div>
        </div>
      </div>
      {
        state === "HOME" ? <HomePage /> :
          state === "RESUME" ? <ResumePage /> :
            state === "PROJECT" ? <ProjectPage /> :
              state === 'CONTACT' ? <ContactPage /> : <HomePage />
      }

    </div>
  );
}

export default App;