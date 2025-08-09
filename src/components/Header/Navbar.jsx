import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className='px-5 py-3'>
            <ul className='flex inter text-[15px] gap-x-4'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">Laptops</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
