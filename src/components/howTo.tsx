import React from 'react'

function HowTo() {
  return (
    <section >
        <section className='flex  justify-center w-screen'>
    <div className='text-2xl font-bold mb-3 '>HUR MAN SPELAR</div>
        </section>

     
      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12 flex-1" >
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">1. Ladda ner appen</h2>
          <p className="text-gray-600">
            Ladda ner appen och skapa ett konto.
            Och välj din första skattjakt.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">2. Följ ledtrådar</h2>
          <p className="text-gray-600">
           Lös gåtor och upptäck nya platser.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">3. Hitta skatten</h2>
          <p className="text-gray-600">
            Lås upp hemligheter och belöninigar när du klarar uppdraget.
          </p>
        </div>
                <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">4. Dela ditt äventyr</h2>
          <p className="text-gray-600">
            Se din placering på topplistan, jämför med vänner och dela ditt äventyr
          </p>
        </div>
      </section>






        <section className=' flex w-[100%] justify-center'>
            <span className="text-2xl font-bold mb-3" > Välj ditt äventyr</span>
        </section>


        <section className="flex h-100  gap-2 sm:grid-cols-2 lg:grid-cols-3" >
        <div className="p-2 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Lätt</h2>
          <p className="text-gray-600">
            Upptäck skattjakten med enkla ledtrådar  för barn, nybörjare och familjer.
          </p>
        </div>
        <div className="p-2 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Medel</h2>
          <p className="text-gray-600">
           Utmaningar med list, logik och lagom twist – för vana skattjägare och smarta nybörjare.
          </p>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Svår</h2>
          <p className="text-gray-600">
            Lås upp hemligheter och belöninigar när du klarar uppdraget.
          </p>
        </div>
      </section>
    </section>
  )
}

export default HowTo