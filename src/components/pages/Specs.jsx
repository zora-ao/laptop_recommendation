import laptops from '../../laptops.json';
import { useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Tables from '../Tables';
import SpecsList from '../SpecsList';

const Specs = () => {

    const {name} = useParams();

    const laptop = laptops.find((item) => item.name === name);


    return (
        <div className=''>
            <h1 className='text-center poppins text-4xl font-semibold mt-6 mb-10'>Laptop Specification</h1>
                <div className='flex justify-evenly'>
                    <div className='flex flex-col justify-around'>
                        <img
                        className='w-[350px] rounded-xl'
                        src={laptop.image}
                        alt={laptop.name} />
                        <h1 className='font-semibold poppins text-center text-2xl'>{laptop.name}</h1>
                    </div>
                    <SpecsList laptop={laptop} />
                </div>
                <div className='p-4 my-5 justify-evenly flex mx-auto'>
                    <div className='px-5'>
                        <h1 className='poppins text-2xl font-semibold my-2'>More Details</h1>
                        <p className='inter text-justify indent-10'>{laptop.description}</p>
                    </div>
                    <div className='my-4'>
                        <iframe width="560" height="315" 
                        className='rounded-lg'
                        src={laptop.review} 
                        title="YouTube video player" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    </div>
                </div>
        </div>
    )
}

export default Specs
