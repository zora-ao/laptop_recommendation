import { useTheme } from "../../contexts/themeContext";
import Hero from "../Hero"
import Laptops from "../Laptops"
import Guide from "../Guide"
import { FaArrowUp } from "react-icons/fa6";
const Home = () => {

    const { theme } = useTheme();

    return (
        <>
            <Hero />
            <Guide />
            <Laptops />
            <a href="#home">
                <FaArrowUp className={`${theme === "light" ? "bg-white" : "bg-black"} fixed text-4xl p-2 rounded border border-black md:right-20 right-3 bottom-2 md:bottom-10`} />
            </a>
        
        </>
    )
}

export default Home
