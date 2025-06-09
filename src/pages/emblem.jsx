import { useState } from 'react';
import Card from '../components/card_e';
import '../App.css';

function App() {
  const emblem = [
    { name: "Assasin", slot1:"/src/media/hero/hero19.png", slot2:"/src/media/hero/hero19.png", slot3:"/src/media/hero/hero19.png", image: "/src/media/emblem/assasin.png" },
    { name: "Fighter", slot1:"", slot2:"", slot3:"", image: "/src/media/emblem/fighter.png" }, 
    { name: "Common", slot1:"", slot2:"", slot3:"", image: "/src/media/emblem/common.png" }, 
    { name: "Mage", slot1:"", slot2:"", slot3:"", image: "/src/media/emblem/emblem4.png" },
    { name: "Marksman", slot1:"", slot2:"", slot3:"", image: "/src/media/emblem/emblem5.png" },
    { name: "Tank", slot1:"", slot2:"", slot3:"", image: "/src/media/emblem/emblem6.png" },
  ];
  return (
    <>
      <section className='p-4 font-[poppins] space-y-4'>
        <div className='bg-sky-400 p-4 rounded-md'>
          <h1 className='text-xl font-bold mb-4'>Emblem</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
            {emblem.map((item, index) => (
              <Card 
                key={index} 
                name={item.name} 
                slot1={item.slot1} 
                slot2={item.slot2} 
                slot3={item.slot3} 
                image={item.image} 
              />
            ))}
            </div>
        </div>
      </section>
    </>
  );
}

export default App;