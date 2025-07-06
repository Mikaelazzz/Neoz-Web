import { useState } from 'react'
import Card from '../components/card_new';

function App() {

  
  const newHeroes = [
    { name: "Fanny", type1: "Chase", type2: "Reap", image: "/src/media/TESss.png" },
    { name: "Layla", type1: "Reap", type2: "Damage", image: "/src/media/TESss.png" },
    { name: "Fanny", type1: "Chase", type2: "Reap", image: "/src/media/TESss.png" },
    { name: "Layla", type1: "Reap", type2: "Damage", image: "/src/media/TESss.png" },
    { name: "Fanny", type1: "Chase", type2: "Reap", image: "/src/media/TESss.png" },
    { name: "Layla", type1: "Reap", type2: "Damage", image: "/src/media/TESss.png" }
  ];

  return (
    <>
    <section className='p-4 font-[poppins] space-y-6  mx-12 mt-4'>
        <div className='flex flex-row justify-between items-center rounded-md'>
          <h1 className='text-sm font-bold mb-4 xl:text-xl items-center'>New Update Patch On MLBB !</h1>
          <select className='bg-gray-300 p-1 rounded-lg' name="" id="">
            <option value="" hidden>Pilih Patch</option>
            <option value="1">1.9.4.2</option>
            <option value="2">1.9.4.1</option>
            <option value="3">1.9.4.0</option>
          </select>
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3'>
          {newHeroes.map((hero,index)=>(
            <Card 
              key={index} 
              name={hero.name} 
              type1={hero.type1} 
              type2={hero.type2} 
              image={hero.image} 
            />
          ))}
        </div>
    </section>
    
      
    </>
  )
}

export default App
