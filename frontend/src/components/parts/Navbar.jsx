import React from 'react'
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='w-screen h-18 pt-3'>
      <div className='bg-[#0B0C0D] text-white flex items-center rounded-full absolute left-1/2 translate-x-[-50%] px-8 gap-30 py-3'>
            <div className='uppercase font-bold tracking-tighter'>
              Name
            </div>
            <div className='flex items-center gap-6'>
                {['Home','About','Contact'].map((elem, index) => {
                    return (
                    <div key={index} className='font-semibold tracking-tighter'>
                        <Link to={`/${elem == 'Home' ? ' ': elem.toLowerCase()}`}>{elem}</Link>
                    </div>
                    )
                })}
                
            </div>
            <div>
              <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar