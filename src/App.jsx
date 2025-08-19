import React from 'react'
import Header from './components/header'
import Hero from './components/hero'
import MainContent from './components/mainContent'
import Footer from './components/footer'
import About from './components/about'
import HowTo from './components/howTo'
import UnderDevelopmentModal  from "./components/develop"

function App() {
  return (
    <>
<section className='bg-[#021118]'>
<UnderDevelopmentModal/>
<Header/>
<Hero />
<MainContent/>
<HowTo/>
<Footer/>
</section>
    </>

  )
}

export default App