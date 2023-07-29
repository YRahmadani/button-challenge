import React from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons'

const App = () => {
  const [disable, setDisable] = useState(false)
  return (
    <div className='flex items-start'>
      <div className='w-[20%] h-screen sticky top-0 bg-slate-100 flex flex-col items-center'>
        <div className='w-[65%]'>
          <h2 className='font-bold font-poppins py-10'><span className='text-[#FF6000]'>Dev</span>challenges.io</h2>
          <ul className='list-none'>
            <li className='mb-9 mt-10 font-poppins'>Colors</li>
            <li className='mb-9 font-poppins'>Typography</li>
            <li className='mb-9 font-poppins'>Spaces</li>
            <li className='mb-9 font-poppins font-bold'>Buttons</li>
            <li className='mb-9 font-poppins'>Inputs</li>
            <li className='font-poppins'>Grid</li>
          </ul>
        </div>
      </div>

      <div className='flex h-full flex-col pt-16 gap-8 ml-16'>
        <h2 className='font-poppins font-bold text-lg'>Buttons</h2>
        {/* Button Variant */}
        {/* Button type: default */}
        <div className='flex flex-col gap-2 justify-start'>
          <code>&lt;Button type="default"/&gt;</code>
          <div className='flex gap-20'>
            <button className=' bg-zinc-200 py-3 px-5 rounded-xl focus:bg-zinc-300 hover:bg-zinc-300 font-poppins text-sm'>Default</button>
            <button className='bg-zinc-300 rounded-xl py-3 px-5 font-poppins text-sm'>Default</button>
          </div>
        </div>

        {/* Button type: outline */}
        <div className='flex flex-col justify-start gap-2'>
          <code>&lt;Button type="outline"/&gt;</code>
          <div className='flex gap-20'>
            <button className='border-2 border-sky-300 py-3 px-5 focus:bg-sky-100
            rounded-xl hover:bg-sky-100 font-poppins text-sm text-sky-600'>Outline</button>
            <button className='border-2 border-sky-300 bg-sky-100 py-3 px-5 rounded-xl font-poppins text-sm text-sky-600'>Outline</button>
          </div>
        </div>

        {/* Button type: text */}
        <div className='flex justify-start gap-2 flex-col'>
          <code>&lt;Button type="outline"/&gt;</code>
          <div className='flex gap-20'>
            <button className='py-3 px-7 focus:bg-violet-100
            rounded-xl hover:bg-violet-100 font-poppins text-sm text-violet-600'>Text</button>
            <button className='bg-violet-100 py-3 px-7 rounded-xl font-poppins text-sm text-violet-600'>Text</button>
          </div>
        </div>

        {/* Disable Shadow */}
        <div className='flex flex-col gap-2'>
          <code>&lt;Button disableShadow/&gt;</code>
          <div>
            <button className=' bg-blue-700 py-3 px-5 text-white rounded-xl font-poppins text-sm shadow-lg focus:shadow-none'>Disable Shadow</button>
          </div>
        </div>

        {/* Disable Option */}
        <div className='flex justify-start gap-2 flex-col'>
          <code>&lt;Button disabled/&gt;</code>
          <div className='flex gap-20'>
            <button className={`bg-gray-600 text-white font-poppins text-sm py-3 px-5 rounded-xl ${disable ? 'opacity-50' : 'opacity-100'}`} onClick={() => setDisable((prev) => !prev)}>Disabled</button>
            <button className=' bg-gray-600 opacity-50 text-white font-poppins text-sm py-3 px-5 rounded-xl'>Disabled</button>
          </div>
        </div>

        {/* Button with icon */}
        <div className='flex justify-start gap-2 flex-col'>
          <code>&lt;Button icon="fa-arrow-up-from-bracket"/&gt;</code>
          <div className='flex gap-20'>
            <button className='bg-pink-500 text-white active:scale-95 font-poppins text-sm flex gap-3 py-3 px-5 rounded-xl items-center'>
              <FontAwesomeIcon icon={faArrowUpFromBracket} className='text-white' />
              Upload
            </button>
            <button className='bg-pink-500 text-white active:scale-95 font-poppins text-sm flex gap-3 py-3 px-5 rounded-xl items-center'>
              Upload
              <FontAwesomeIcon icon={faArrowUpFromBracket} className='text-white' />
            </button>
          </div>
        </div>

        {/* Button sizes */}
        <div className='flex justify-start items-center gap-20'>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button size="sm"/&gt;</code>
            <button className='font-poppins text-sm h-8 px-5 text-rose-500 bg-rose-200 rounded-lg'>Small</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button size="md"/&gt;</code>
            <button className='font-poppins text-sm h-10 px-5 text-rose-100 bg-rose-400 rounded-xl'>Medium</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button size="lg"/&gt;</code>
            <button className='font-poppins text-sm h-12 px-8 text-rose-100 bg-rose-500 rounded-xl'>Large</button>
          </div>
        </div>

        {/* Button Color */}
        <div className='flex justify-start items-center gap-16'>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button color="default"/&gt;</code>
            <button className=' bg-zinc-200 hover:bg-zinc-300 focus:bg-zinc-300 py-3 px-5 rounded-xl font-poppins text-sm'>Default</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button color="primary"/&gt;</code>
            <button className=' bg-blue-700 hover:bg-blue-400 focus:bg-blue-400 py-3 px-5 text-white rounded-xl font-poppins text-sm shadow-lg focus:shadow-none'>Primary</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button color="secondary"/&gt;</code>
            <button className='bg-gray-600 hover:bg-gray-300 hover:text-black focus:bg-gray-300 focus:text-black text-white font-poppins text-sm py-3 px-5 rounded-xl'>Secondary</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button color="danger"/&gt;</code>
            <button className='font-poppins text-sm h-12 px-8 text-white bg-red-600 hover:bg-red-400 focus:bg-red-400 rounded-xl'>Danger</button>
          </div>
        </div>

        {/* Button Color & Focus */}
        <div className='flex justify-start items-center gap-16'>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button class="hover: focus:"/&gt;</code>
            <button className=' bg-zinc-300 py-3 px-5 rounded-xl font-poppins text-sm'>Default</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button class="hover: focus:"/&gt;</code>
            <button className=' bg-blue-400 py-3 px-5 text-white rounded-xl font-poppins text-sm shadow-lg focus:shadow-none'>Primary</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button class="hover: focus:"/&gt;</code>
            <button className='bg-gray-300 text-black font-poppins text-sm py-3 px-5 rounded-xl'>Secondary</button>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <code>&lt;Button class="hover: focus:"/&gt;</code>
            <button className='font-poppins text-sm h-12 px-8 text-white bg-red-400 rounded-xl'>Danger</button>
          </div>
        </div>
        <p className='font-poppins mt-8 mb-6 text-sm text-gray-500'>created by <span className='font-bold'>Geevanya </span>- devChallenges.io</p>
      </div>
    </div>
  )
}

export default App
