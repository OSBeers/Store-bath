// import React from 'react'
import { logo, phone , search} from '../assets' 

const Navbar = () => {
  return (
    <header className='header'>
      <div className='flex flex-row items-center justify-center gap-6'>
        <img src={logo} alt="logo" className=''/>
        <div className='font-light text-gray-400 font-PT_Sans'> Разработано во Германии. Сделано в России</div>
      </div>
      
      <div className='flex items-center justify-center gap-[32px]'>
        <img src={phone} alt="phone" />
        
        <button className='border-[1px] border-gray-400 rounded-sm h-10 w-10 grid place-content-center'>
          <img src={search} alt="search" className='h-5 w-5' />
        </button>
      </div>
    </header>
  )
}

export default Navbar