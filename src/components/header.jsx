import React from 'react'

function Header() {
  return (
    <section className='mt-2 text-2xl'>
        <div className=' flex justify-between items-center  '>
            <img className='h-20 ml-3' src="pjdig.png" alt="" />
            <span>Hem</span>
            <span>Om</span>
            <span className='mr-10'>Ladda ner</span>
        </div>

    </section>
      )
}

export default Header