import { MdStorage } from "react-icons/md";
import { BsCpuFill } from "react-icons/bs";
import { GiBattery100, GiLaptop } from "react-icons/gi";
import { MdSdStorage } from "react-icons/md";
import { FaDisplay } from "react-icons/fa6";
import { IoMdPricetags } from "react-icons/io";


const SpecsList = ({laptop}) => {

    const {processor, battery, brand, ram, storage, screenSize, price} = laptop;

    const list = [
        { icon: <GiLaptop className="text-xl" />, label: "Brand", value: brand },
        { icon: <IoMdPricetags className="text-xl" />, label: "Price", value: `₱${price}` },
        { icon: <BsCpuFill className="text-xl" />, label: "Processor", value: processor },
        { icon: <MdSdStorage className="text-xl" />, label: "RAM", value: ram },
        { icon: <GiBattery100 className="text-xl" />, label: "Battery", value: battery },
        { icon: <MdStorage className="text-xl" />, label: "Storage", value: storage },
        { icon: <FaDisplay className="text-xl" />, label: "Screen Size", value: screenSize },
    ];

    return (
        <section className="flex flex-col gap-2 w-1/2">
                {list.map((item) => (
                    <div className="bg-gray-300 rounded-lg py-2 px-3 backdrop-blur-2xl flex items-center gap-3">
                        {item.icon}
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
