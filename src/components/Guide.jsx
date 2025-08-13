import { FaCheckCircle } from "react-icons/fa";
import { MdSdStorage } from "react-icons/md";
import { MdStorage } from "react-icons/md";
import { IoMdBatteryCharging } from "react-icons/io";
import { ImDisplay } from "react-icons/im";
import { useTheme } from "../contexts/themeContext";

const Guide = () => {

    const { theme } = useTheme();

    const guideList = [
        {
            icon: <FaCheckCircle />,
            title: "1. Processor (CPU)",
            desc: `The processor is the "brain" of your laptop. It handles all the calculations and tasks. 
                        The main players are Intel (Core i3, i5, i7, i9) and AMD (Ryzen 3, 5, 7, 9).`,
            li: [
                <><strong>Entry-Level (Core i3 / Ryzen 3)</strong>: Best for basic tasks like web browsing, email, and word processing.</>,
                <><strong>Mid-Range (Core i5 / Ryzen 5)</strong>: A great all-rounder for students and professionals. Handles multitasking, streaming, and some light gaming or creative work.</>,
                <><strong>High-Performance (Core i7 / Ryzen 7)</strong>: Ideal for demanding tasks such as video editing, graphic design, and serious gaming.</>,
                <><strong>Enthusiast (Core i9 / Ryzen 9)</strong>: Top-of-the-line performance for professionals who need the absolute best for heavy-duty tasks.</>
            ]
        },{
            icon: <MdSdStorage />,            title: "2. Random Access Memory (RAM)",
            desc: `RAM is your laptop's short-term memory. It's where your computer stores data it needs to access quickly, like running applications and open browser tabs. More RAM means smoother multitasking.`,
            li: [
                <><strong>8 GB</strong>: The bare minimum for a modern laptop, suitable for basic tasks.</>,
                <><strong>16 GB</strong>: The sweet spot for most users, providing excellent performance for everyday use and more demanding software.</>,
                <><strong>32 GB or more</strong>: For power users and professionals working with large datasets, complex design software, or high-end gaming.</>
            ]
        },{
            icon: <MdStorage />,
            title: "3. Storage: SSD vs. HDD",
            desc: `This is where your files and operating system are stored. You'll primarily see two types: Solid-State Drives (SSDs) and Hard Disk Drives (HDDs).`,
            li: [
                <><strong>SSD (Solid-State Drive)</strong>:
                            Faster, more durable, and more expensive. They are crucial for fast boot times and snappy application loading. We highly recommend a laptop with an SSD.</>,
                <><strong>HDD (Hard Disk Drive)</strong>:
                            Slower and more prone to damage, but offers more storage for a lower price. Best for storing large amounts of data that don't need to be accessed frequently.</>,
            ]
        },{
            icon: <ImDisplay />,
            title: "4. Display",
            desc: `The display is your window to the digital world. Key things to consider are size, resolution, and panel type.`,
            li: [
                <><strong>Size</strong>: Ranging from small 11-inch models for portability to large 17-inch models for desktop-like experiences.</>,
                <><strong>Resolution</strong>: Full HD (1920x1080) is the standard for a crisp image. 
                            For graphic designers and video editors, 
                            4K (3840x2160) offers incredible detail.</>,
                <><strong>Panel Type</strong>: IPS panels offer great color accuracy and wide viewing angles. 
                            OLED displays provide stunning contrast and true blacks, but can be more expensive.</>
            ]
        },{
            icon: <IoMdBatteryCharging />,
            title: "5. Battery Life",
            desc: `If you plan to use your laptop on the go, battery life is crucial. 
                        Look for a laptop that advertises at least 8 hours of use for a full workday. 
                        Keep in mind that heavy tasks like gaming or video editing will drain the battery much faster.`
        }
    ]

    return (
        <div className='md:px-8'>
            <div className='my-10 text-center md:w-3/4 mx-auto'>
                <h1 className='poppins font-bold md:text-3xl text-xl my-3'>Here are things to consider before buying a laptop.</h1>
                <p className='inter text-sm'>Navigating the world of laptops can be overwhelming. With so many options, how do you 
                    choose the right one for you? This guide 
                    will walk you through the key components 
                    and features to consider before making your purchase.
                </p>
            </div>

            <div className='flex flex-col md:gap-y-20 gap-y-4 px-4'>
                {guideList.map((item, index) => (
                    <div key={index} className="md:relative md:h-[500px]">
                        <div 
                        className='sticky top-20 border hover:border hover:border-black duration-300 ease md:px-12 px-6 py-8 rounded-lg shadow-lg md:w-3/4 mx-auto'
                        >
                        <h2 className={`${theme === "light" ? "text-color" : "text-blue-200"} poppins text-2xl font-semibold flex items-center gap-x-5`}>
                            {item.icon}
                            {item.title}
                        </h2>
                        <p className='inter my-3'>
                            {item.desc}
                        </p>
                        <ul className='flex flex-col gap-3'>
                            {item.li && (
                                item.li.map((list, liIndex) => (
                                <li 
                                className='list-disc'
                                key={`${index}-${liIndex}`}>
                                    {list}
                                </li>
                            ))
                            )}
                        </ul>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Guide
