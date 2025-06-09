import { Chip } from '@mui/material';
import '../App.css';

function Card({ name, image, slot1, slot2, slot3 }) {
  return (
    <div className='font-[poppins] w-full h-full'>
      <div className='flex flex-col h-full shadow-md rounded-md overflow-hidden'>
        <div className='relative flex-grow bg-gray-100 min-h-[200px]'>
          <div className='absolute inset-0 flex flex-col items-center justify-center p-2'>
            {image && (
              <img 
                src={image} 
                alt={name} 
                className='w-auto h-[60%] object-contain max-w-full max-h-full' 
              />
            )}
            <h1 className='text-purple-700 font-bold text-center mt-2'>{name}</h1>
          </div>
        </div>
        
        <div className='bg-sky-100 p-2'>
          <div className='flex flex-wrap gap-2 justify-center'>
            <img 
                src={slot1} 
                alt={name} 
                className='w-12 h-12' 
              />
              <img 
                src={slot2} 
                alt={name} 
                className='w-12 h-12' 
              />
              <img 
                src={slot3} 
                alt={name} 
                className='w-12 h-12' 
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;