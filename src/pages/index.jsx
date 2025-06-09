import { useState } from 'react'

function App() {

  return (
    <>
    <section className='p-4 font-[poppins] space-y-6'>
        <div className='flex justify-center text-center font-[poppins] bg-sky-200 p-4 rounded-lg'>
          <div className='space-y-2'>
            <img src="src/media/logo.png" alt="" className='w-32 h-32'/>
            <h1 >Welcome To Neoz</h1>
          </div>
        </div>
        <div className='flex justify-center font-[poppins] bg-sky-200 p-4 rounded-lg'>
          <div className='flex flex-row gap-2'>
            <img src="src/media/logo.png" alt="" className='w-32 h-32'/>
            <div className='my-auto w-52'>
            <h1 className='font-bold'>PRAKTIS UI</h1>
            <small>Tampilan yang mudah dipahami</small>
            </div>
          </div>
        </div>
        <div className='flex justify-center font-[poppins] bg-sky-200 p-4 rounded-lg'>
          <div className='flex flex-row gap-2'>
            <img src="src/media/logo.png" alt="" className='w-32 h-32'/>
            <div className='my-auto w-52'>
            <h1 className='font-bold'>CEK WIN RATE</h1>
            <small>Untuk Mengetahui Win Rate Hero</small>
            </div>
          </div>
        </div>
        <div className='flex justify-center font-[poppins] bg-sky-200 p-4 rounded-lg'>
          <div className='flex flex-row gap-2'>
            <img src="src/media/logo.png" alt="" className='w-32 h-32'/>
            <div className='my-auto w-52'>
            <h1 className='font-bold'>INFORMASI PATCH</h1>
            <small>Memberikan Informasi tentang Patch Terbaru</small>
            </div>
          </div>
        </div>
    </section>
    
      
    </>
  )
}

export default App
