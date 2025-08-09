import { useState } from 'react';
import laptops from '../laptops.json'
import Card from './Card'


const Laptops = () => {
    const [showing, setShowing] = useState(4);

    const limitLaptop = laptops.slice(0, showing);

    const handleShow = () => {
        setShowing(prev => prev + 4);
    }

    const handleLess = () => {
        setShowing(prev => prev - 4);
    }

    return (
        <section className='p-5'>
            <div className='py-4'>
                <h1 className='poppins text-xl font-semibold'>Recommended Laptops</h1>
                <p className='inter text-sm'>Here are some of the recommended laptops for you to choose.</p>
            </div>

            <ul className='flex gap-x-5 my-5 mx-auto justify-center items-center'>
                <li>
                    <button className='bg-gray-700 text-white inter px-4 py-2 rounded-lg'>All</button>
                </li>
                <li>
                    Budget
                </li>
                <li>
                    Mid-Range
                </li>
                <li>
                    High-End
                </li>
            </ul>

            <div className='flex flex-wrap justify-center gap-4'>
                {limitLaptop.map((item) => (
                    <div className='flex' key={item.id}>
                        <Card 
                        src={item.image} 
                        title={item.name} 
                        description={item.description}
                        className='h-auto'
                        />
                    </div>
                ))}
            </div>
            <div className='flex justify-center gap-x-4'>
                <button 
                onClick={handleShow}
                className='px-3 py-2 active-color text-white poppins text-sm rounded my-4'>
                    Show More
                </button>
                {showing > 4 ? (
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
