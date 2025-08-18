import React from 'react'

function About() {
  return (
    <section className="flex flex-col items-center w- py-16 px-6 bg-[#021118] text-white">
      <div className="max-w-3xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 ">
          Om oss
        </h1>
        <p className="text-lg leading-relaxed mb-4 ">
          Vi heter <span className="font-semibold">Jesper</span> och <span className="font-semibold">Pastora</span>, ett par som älskar både äventyr och kluriga gåtor. 
          Idén till <span className="font-semibold">Riddle You</span> föddes ur vår vilja att få människor att 
          <span className="italic"> komma ut, utforska och ha roligt tillsammans</span>.
        </p>
        <p className="text-lg leading-relaxed mb-4">
          Vi ville skapa något som alla kan uppskatta  barn, vuxna, familjer, vänner eller kollegor. 
          Därför byggde vi en skattjakt-app som kombinerar hjärngympa med rörelse och äventyr i verkligheten.
        </p>
        <p className="text-lg leading-relaxed  mb-6">
          Med <span className="font-semibold">Riddle You</span> kan du upptäcka nya platser, umgås på ett lekfullt sätt och 
          utmana dig själv eller andra. Oavsett ålder är det alltid spännande att följa en ledtråd 
          och känna pirret när skatten närmar sig.
        </p>
        <p className="text-xl font-semibold ">
           Vår vision: <span>Att göra världen lite mer lekfull  en gåta i taget.</span>
        </p>
      </div>
    </section>
  )
}

export default About
