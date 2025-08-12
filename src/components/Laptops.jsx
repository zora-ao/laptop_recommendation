import { useState } from 'react';
import laptops from '../laptops.json'
import SideCard from './SideCard';


const Laptops = () => {
    const [active, setActive] = useState("All");
    const categories = ["All", "Budget", "Mid-Range", "High-End"];

    const getFilteredCat = () => {
        if (active === "Budget") {
            return laptops.filter(item => item.price >= 2000 && item.price <= 35999);
        }
        else if (active === "Mid-Range") {
            return laptops.filter(item => item.price >= 36000 && item.price <= 55999);
        }
        else if (active === "High-End") {
            return laptops.filter(item => item.price > 56000);
        }
        return laptops;
    }

    const filtered = getFilteredCat();

    return (
        <section id='laptop' className='md:p-5 px-4 flex flex-col justify-center relative'>
            <div className='py-4'>
                <h1 className='poppins text-xl font-semibold'>Recommended Laptops</h1>
                <p className='inter text-sm'>Here are some of the recommended laptops for you to choose.</p>
            </div>

            <ul className='flex my-8 justify-around md:mx-auto items-center bg-gray-300 md:rounded-full rounded-lg py-2 px-3 sticky top-2'>
                <li>
                    {categories.map((cat) => (
                        <button 
                        key={cat}
                        onClick={() => setActive(cat)}
                        className={`cursor-pointer text-sm inter md:px-6 px-3 py-2 rounded-full duration-300 ease ${active === cat ? "bg-blue-700 text-white" : ""}`}>
                            {cat}
                        </button>
                    ))}
                </li>
            </ul>

            <div className='flex flex-wrap justify-center gap-x-2 gap-y-3'>
                    {filtered.map((item) => (
                        <SideCard
                        key={item.id}
                        item={item}
                        />
                    ))}
            </div>
        </section>
    )
}

export default Laptops
