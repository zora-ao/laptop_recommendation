import Card from "./Card"

const Hero = () => {
    return (
        <section className="py-10 px-5 md:px-0">
            <div className='text-center md:mt-10'>
                <h1 className='poppins md:text-4xl text-2xl font-bold py-2'>WELCOME TO STUDENT LAPTOP GUIDE!</h1>
                <p className='inter'>Find the best laptop for your academics</p>
                <ul className='flex md:w-1/2 justify-center gap-x-2 mx-auto py-3'>
                    <li>
                        <button className='active-color py-2 px-6 rounded-full inter text-white'>Budget Friendly</button>
                    </li>
                    <li>
                        <button className='light-color py-2 px-6 rounded-full inter '>Top Picks</button>
                    </li>
                </ul>
            </div>
            <div>
                <h1 className='poppins text-xl font-semibold px-5 py-6'>Top Picks</h1>
                <div className='flex flex-wrap justify-evenly gap-3 md:gap-0'>
                    {/* cards */}
                    <Card 
                    src="https://www.notebookcheck.net/fileadmin/Notebooks/Sonstiges/bestmobilelaptops.jpg"
                    description="A sleek, lightweight laptop perfect for students and professionals who need portability and long battery life"
                    title="Asus ROG 5 pro" />

                    <Card 
                    src='https://cdn.mos.cms.futurecdn.net/EW3NoUEQuteWDPS2xkSgtA.jpg'
                    description="A sleek, lightweight laptop perfect for students and professionals who need portability and long battery life"
                    title="Acer nitro 5 red" />

                    <Card 
                    src='https://images.summitmedia-digital.com/spotph/images/2022/06/30/guide-to-everyhing-laptop-640-1656580338.jpg'
                    description="A sleek, lightweight laptop perfect for students and professionals who need portability and long battery life"
                    title="Huawie Matebook D15" />
                </div>
            </div>
        </section>
    )
}

export default Hero
