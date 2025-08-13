import { MdStorage } from "react-icons/md";
import { BsCpuFill } from "react-icons/bs";
import { GiBattery100, GiLaptop } from "react-icons/gi";
import { MdSdStorage } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";
import { useTheme } from "../contexts/themeContext";


const SpecsList = ({laptop}) => {
    const {theme} = useTheme();

    const {processor, battery, brand, ram, storage, screenSize, price} = laptop;

    const list = [
        { icon: <GiLaptop className="text-xl text-[#2D3250]" />, label: "Brand", value: brand, color: "bg-[#2D3250]/15" },
        { icon: <IoMdPricetags className="text-xl text-[#184D47]" />, label: "Price", value: `₱${price.toLocaleString("en-US")}`, color: "bg-[#184D47]/15" },
        { icon: <BsCpuFill className="text-xl text-[#FB3640]" />, label: "Processor", value: processor, color: "bg-[#FB3640]/15" },
        { icon: <MdSdStorage className="text-xl text-[#542E71]" />, label: "RAM", value: ram, color: "bg-[#542E71]/15" },
        { icon: <MdStorage className="text-xl text-[#E8505B]" />, label: "Storage", value: storage, color: "bg-[#E8505B]/15" },
        { icon: <GiBattery100 className="text-xl text-[#085F63]" />, label: "Battery", value: battery, color: "bg-[#085F63]/15" },
        { icon: <FaDisplay className="text-xl text-[#FF9234]" />, label: "Screen Size", value: screenSize, color: "bg-[#FF9234]/15" },
    ];

    return (
        <section className="flex flex-col gap-2 md:w-1/2 h-[350px] overflow-y-auto scroll-smooth">
                {list.map((item) => (
                    <div key={item.id} className={`${theme === "light" ? "hover:bg-gray-300" : "hover:bg-black"} shadow-lg border rounded-lg py-2 px-3 backdrop-blur-2xl flex items-center gap-3`}>
                        <div className={`${item.color} p-3 rounded-full shadow-xl`}>
                            {item.icon}
                        </div>
                        <div>
                            <h1 className="poppins font-bold">{item.label}</h1>
                            <p className="inter text-sm">{item.value}</p>
                        </div>
                    </div>
                ))}
        </section>
    )
}

export default SpecsList
