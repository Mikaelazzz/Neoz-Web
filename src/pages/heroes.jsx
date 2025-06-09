import Card from '../components/card';
import '../App.css';

function App() {

  const newHeroes = [
    { name: "Fanny", type1: "Chase", type2: "Reap", image: "/src/media/17.png" },
    { name: "Aldous", type1: "Strike", type2: "Burst", image: "/src/media/18.png" }
  ];

  const allHeroes = [
    { name: "Fanny", type1: "Chase", type2: "Reap", image: "/src/media/17.png" },
    { name: "Aldous", type1: "Strike", type2: "Burst", image: "/src/media/18.png" },
    { name: "Layla", type1: "Shoot", type2: "Snipe", image: "/src/media/19.png" },
    { name: "Lancelot", type1: "Dash", type2: "Slash", image: "/src/media/20.png" },
    { name: "Lesley", type1: "Snipe", type2: "Critical", image: "/src/media/21.png" },
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