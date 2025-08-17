import React from 'react'

function Header() {
  return (
    <section className='text-2xl  bg-[#011F3B] text-white p-3'>
        <div className=' flex justify-between items-center  '>
            <img className='h-20 ml-3' src="riddleUlogo.png" alt="logo" />
            <span>Om</span>
            <span>Vart</span>
            <span className='mr-10'>Event</span>
            <span className='mr-10'>Kontakt</span>
        </div>

    </section>
      )
}

export default Header