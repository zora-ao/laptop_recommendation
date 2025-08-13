import { NavLink } from "react-router-dom";

const Card = ({
    src, title, description, className = 'h-[180px]'
}) => {

    return (
        <div className='border flex flex-col justify-between w-[350px] border-gray-300 py-3 px-6 rounded-lg shadow-lg'>
            <img className={`w-[350px] h-[200px] rounded-xl ${className}`} src={src} alt="" />
            <div className='px-3 mt-2 flex flex-col justify-between'>
                <h1 className='poppins font-semibold'>{title}</h1>
                <p className='inter text-sm pt-1 py-3'>{description}</p>
            </div>
        </div>
    )
}

export default Card
