import React from 'react'

const Navbar = () => {
  return (
    <div className='fixed top-0 z-[40] w-full h-[100px] bg-transparent flex justify-between items-center px-10 md:px-20'>
        <div className='flex flex-row gap-3 itens-center'>
            <Image src="/horseLogo.jpg"
            alt="logo"
            width={40}
            height={40}
            className='w-full h-full object-contein rounded-full'
            />
            <h1 className='text-white text-[25px] font-semibold'>WladiCosta Dev</h1>
        </div>
        <div className=''>

        </div>

    </div>
  )
}

export default Navbar