import { MdOutlineStorage } from "react-icons/md";
import { IoMdBatteryFull } from "react-icons/io";
import { BsCpuFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const SideCard = ({item}) => {

    const {battery, ram, storage, description, image, name} = item;

    return (
        <div className='shadow-lg flex flex-col justify-between text-center gap-x-10 items-center w-[350px] px-5 py-4 rounded'>
            <img 
            className='w-[280px] h-[250px] rounded-lg'
            src={image} alt={name} />
            <div className='mt-4 flex flex-col justify-between items-center'>
                <h1 className='poppins text-xl font-semibold'>{name}</h1>
                <p className='inter text-sm my-4'>
                    {description}
                </p>
                <hr className="border-gray-400 my-2 w-full" />
                <div className='flex gap-x-3 text-sm justify-center'>
                    <div className='flex items-center gap-1'>
                        <BsCpuFill />
                        <h1 className='inter'>{ram}</h1>
                    </div>

                    <div className='flex items-center gap-1'>
                        <MdOutlineStorage />
                        <h1 className='inter'>{storage}</h1>
                    </div>

                    <div className='flex items-center gap-1'>
                        <IoMdBatteryFull />
                        <h1 className='inter'>{battery}</h1>
                    </div>
                </div>
                <hr className="border-gray-400 my-2 w-full" />

                <div className='flex items-center gap-4 mt-5 justify-center'>
                    <button className='bg-blue-700 text-white px-6 py-2 inter text-sm font-semibold rounded'>
                        <Link to={`/specs/${name}`}>View Full Review</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SideCard
