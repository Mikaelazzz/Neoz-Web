import { Chip } from '@mui/material';
import '../App.css';

function Card({ name, image, type1, type2 }) {
  return (
    <div className='font-[poppins] w-full h-full'>
      {/* Card Container */}
      <div className='flex flex-col h-full shadow-md rounded-md overflow-hidden'>
        {/* Image Section */}
        <div className='relative flex-grow bg-gray-100 min-h-[200px]'>
          <div className='absolute inset-0 flex flex-col items-center justify-center p-2'>
            {/* Perbaikan pada bagian gambar */}
            {image && (
              <img 
                src={image} 
                alt={name} 
                className='w-auto h-[60%] object-contain max-w-full max-h-full' 
                // onError={(e) => {
                //   e.target.onerror = null; 
                //   e.target.src = 'placeholder-image-url';
                // }}
              />
            )}
            <h1 className='text-purple-700 font-bold text-center mt-2'>{name}</h1>
          </div>
        </div>
        
        {/* Chip Section */}
        <div className='bg-sky-100 p-2'>
          <div className='flex flex-wrap gap-1 justify-center'>
            <Chip 
              label={type1}
              className='!text-xs !font-[poppins] !border-0 !bg-purple-300 hover:!bg-purple-400 !text-purple-800 hover:!text-purple-900' 
            />
            <Chip 
              label={type2}
              className='!text-xs !font-[poppins] !border-0 !bg-purple-300 hover:!bg-purple-400 !text-purple-800 hover:!text-purple-900' 
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;