import Card from '../components/card';
import '../App.css';

function App() {

  const newHeroes = [
    { name: "Fanny", type1: "Chase", type2: "Reap", image: "/src/media/hero/hero17.png" },
    { name: "Layla", type1: "Reap", type2: "Damage", image: "/src/media/hero/hero18.png" }
  ];

  const allHeroes = [
    { name: "Minotaur", type1: "Crowd Control", type2: "Guard", image: "/src/media/hero/hero19.png" },
    { name: "Lolita", type1: "Guard", type2: "Crowd Control", image: "/src/media/hero/hero20.png" },
    { name: "Hayabusa", type1: "Chase", type2: "Burst", image: "/src/media/hero/hero21.png" },
    { name: "Freya", type1: "Chase", type2: "Damage", image: "/src/media/hero/hero22.png" },
    { name: "Gord", type1: "Poke", type2: "Burst", image: "/src/media/hero/hero23.png" },
  ];  

  return (
    <section className='p-4 font-[poppins] space-y-6 mx-auto'>
      
      <div className='bg-sky-400 p-4 rounded-lg'>
        <h1 className='text-xl font-bold mb-4'>New Heroes</h1>
          <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
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
      </div>

      <div className='bg-sky-400 p-4 rounded-lg'>
        <h1 className='text-xl font-bold mb-4'>Heroes</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3'>
          {allHeroes.map((hero,index)=>(
            <Card 
              key={index} 
              name={hero.name} 
              type1={hero.type1} 
              type2={hero.type2} 
              image={hero.image} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default App;