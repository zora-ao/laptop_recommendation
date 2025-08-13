import Card from "./Card"
import { GiLaptop } from "react-icons/gi";

const Hero = () => {
    return (
        <section className="py-10 px-5 md:px-0">
            <div className='text-center md:mt-10'>
                <GiLaptop className="flex mx-auto text-4xl" />
                <h1 className='poppins md:text-4xl text-2xl font-bold py-2'>WELCOME TO STUDENT LAPTOP GUIDE!</h1>
                <p className='inter'>Find the best laptop for your academics</p>
                <ul className='flex md:w-1/2 justify-center gap-x-2 mx-auto py-3'>
                    <li>
                        <button className='active-color py-2 md:px-6 px-3 rounded-full inter text-white'>Budget Friendly</button>
                    </li>
                    <li>
                        <button className='light-color py-2 md:px-6 px-3 rounded-full inter '>Top Picks</button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='poppins text-xl font-semibold px-5 py-6'>Top Picks</h1>
                <div className='flex flex-wrap justify-evenly gap-3 md:gap-0'>
                    {/* cards */}
                    <Card 
                    src="https://techcrunch.com/wp-content/uploads/2020/11/2020-11-16-074520097.jpg"
                    description="Outstanding performance for its price in the premium segment, fanless design (silent), long battery life (up to 18 hrs), and excellent build quality."
                    title="Apple MacBook Air M1" />

                    <Card 
                    src='https://laptopmedia.com/wp-content/uploads/2024/11/8-3.jpg'
                    description="Lightweight, premium build, strong Intel Core i7 + 16GB RAM performance, excellent battery, and good screen quality."
                    title="ASUS ZenBook 14" />

                    <Card 
                    src='https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/21786687/mchin_181113_4146_0009.0.jpg?quality=90&strip=all&crop=0,0,100,100'
                    description="Affordable but still powerful (Ryzen 7 + up to 16GB RAM), lightweight, strong battery life, and solid productivity performance."
                    title="Acer Swift 3" />
                </div>
            </div>
        </section>
    )
}

export default Hero
