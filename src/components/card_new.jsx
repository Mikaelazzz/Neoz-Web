import { Chip } from '@mui/material';
import '../App.css';

function Card({ name, image, type1, type2 }) {
  return (
    <div>
      <div className='aspect-[9/16] shadow-md rounded-md overflow-hidden'>
        <div className='aspect-[9/16]'>
            {image && (
              <img 
                src={image} 
                alt={name} 
                className='w-full h-full object-cover rounded-md' 
              />
            )}
        </div>
      </div>
    </div>
  );
}

export default Card;