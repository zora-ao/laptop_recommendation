import Navbar from "../Header/Navbar"
import Hero from "../Hero"
import Laptops from "../Laptops"
import Guide from "../Guide"
import { FaArrowUp } from "react-icons/fa6";
const Home = () => {
    return (
        <>
            <Hero />
            <Guide />
            <Laptops />
            <a href="#home">
                <FaArrowUp className="fixed text-4xl p-2 rounded border border-black md:right-20 right-3 bottom-2 md:bottom-10 bg-white" />
            </a>
        
        </>
    )
}

export default Home
