import { Link } from "react-router-dom"
import { FaSun } from "react-icons/fa"
import { IoMoon } from "react-icons/io5"
import { useTheme } from "../../contexts/themeContext"


const Navbar = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <nav id="home" className='px-5 py-3'>
            <ul className='flex inter text-[15px] gap-x-4 items-center'>  
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#laptop">Laptops</a>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <button 
                    className={`text-2xl cursor-pointer border p-2 rounded-full ${theme === "light" ? "bg-black text-white" : "bg-white text-black"}`}
                    onClick={toggleTheme}>
                        {theme === "light" ? <IoMoon /> : <FaSun />}
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
