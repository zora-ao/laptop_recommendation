import { useState } from 'react';
import laptops from '../laptops.json'
import SideCard from './SideCard';


const Laptops = () => {
    const [showing, setShowing] = useState(3);

    const limitLaptop = laptops.slice(0, showing);

    const handleShow = () => {
        setShowing(prev => Math.min(prev + 3, laptops.length));
    }

    const handleLess = () => {
        setShowing(prev => Math.max(prev - 3, 3));
    }

    return (
        <section className='p-5 flex flex-col justify-center'>
            <div className='py-4'>
                <h1 className='poppins text-xl font-semibold'>Recommended Laptops</h1>
                <p className='inter text-sm'>Here are some of the recommended laptops for you to choose.</p>
            </div>

            <ul className='flex my-8 mx-auto justify-around items-center bg-gray-300 rounded-full py-2 px-3'>
                <li>
                    <button className='bg-blue-700 text-white inter px-6 py-2 rounded-full'>All</button>
                </li>
                <li>
                    <button className='inter px-6 py-2 rounded-full'>Budget</button>
                </li>
                <li>
                    <button className='inter px-6 py-2 rounded-full'>Mid-Range</button>
                </li>
                <li>
                    <button className='inter px-6 py-2 rounded-full'>High-End</button>
                </li>
            </ul>

            <div className='flex flex-wrap justify-center gap-x-2 gap-y-3'>
                {limitLaptop.map((item) => (
                    <SideCard
                    key={item.id}
                    item={item}
                    />
                ))}
            </div>
            <div className='flex justify-center gap-x-4'>
                {showing < laptops.length ? (
                    <button 
                    onClick={handleShow}
                    className='px-3 py-2 active-color text-white poppins text-sm rounded my-4'>
                        Show More
                    </button>
                ) : ""}
                {showing > 3 ? (
                    <button 
                    onClick={handleLess}
                    className='px-3 py-2 active-color text-white poppins text-sm rounded my-4'>
                        Show Less
                    </button>
                ) : ""}
            </div>
        </section>
    )
}

export default Laptops
