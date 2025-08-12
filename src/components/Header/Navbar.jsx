import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav id="home" className='px-5 py-3'>
            <ul className='flex inter text-[15px] gap-x-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a href="#laptop">Laptops</a>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
