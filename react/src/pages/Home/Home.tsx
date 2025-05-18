import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BiSearchAlt } from "react-icons/bi";


import Catalog from '../Catalog/Catalog'
import carImage from '../../../public/Cars/1.png'


const motionParagraphs = [
    {
        text: <>Enter a <span className='font-medium'>World of Performance</span>, Style, and <span className='font-medium'>Innovation</span>.</>,
        className: 'text-2xl pb-3 pt-3 font-serif',
    },
    {
        text: 'From sleek sports cars to rugged off-roaders, explore our exclusive',
        className: 'text-lg',
    },
    {
        text: "collection designed to thrill and built to last. Whether you're here to",
        className: 'text-sm pb-1 pt-3 font-extralight',
    },
    {
        text: "browse, compare, or find your dream ride—you're in the",
        className: 'text-sm pb-1 font-extralight',
    },
    {
        text: 'right place. Hit the road. Your journey starts here.',
        className: 'text-sm font-extralight',
    },
];


export default function Home() {
    const navigate = useNavigate()

    return (
        <div className="invisible-scrollbar overflow-x-hidden bg-gray-200  w-screen text-black h-screen">

            <motion.div
                initial={{ rotateY: 700 }}
                animate={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 1 }}
                className='absolute bg-black text-white hover:bg-slate-200 hover:text-black duration-500 -bottom-14 -right-10 p-2 rounded-[30px] m-20'>
                <BiSearchAlt className='text-2xl'></BiSearchAlt>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, marginTop: -100 }}
                animate={{ opacity: 1, marginTop: 0 }}
                transition={{ duration: 1.5 }}
                className='flex flex-col w-full mt-[54px]'>
                <h1 className='text-5xl font text-center text-black font-serif mb-14'></h1>

                <h1 className='text-xl text-center text-black font-serif'>Indulge in the finest cars for premium driving experience</h1>
                <h1 className='text-xl text-center text-black  font-thin'>Explore luxury vehicles built for those who crave excellence in performance and style</h1>
            </motion.div>
            <div
                className='flex sm:flex-col md:flex-row md:justify-between sm:mt-10 md:mt-5 min-h-[78vh] max-h-[78.5dvh] items-center bg-gray-200' >
                <div className='md:ml-9 flex-col text-black sm:w-full '>

                    {motionParagraphs.map((item, index) => (
                        <motion.p
                            key={index}
                            initial={{ opacity: 0, marginTop: 30 }}
                            animate={{ opacity: 1, marginTop: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`${item.className} md:text-start sm:text-center text-black`}
                        >
                            {item.text}
                        </motion.p>
                    ))}

                    <motion.div
                        initial={{ opacity: 0, marginLeft: -1000 }}
                        animate={{ opacity: 1, marginLeft: 0 }}
                        transition={{ duration: 1 }}
                        className='flex flex-col relative top-24 items-start md:block sm:hidden'>
                        <div className='m-2'>
                            <button onClick={() => { navigate('/login') }} className='pl-3 pr-3 pb-2.5 pt-2.5 m-1 min-w-[150px] rounded-md bg-gray-50 duration-300 hover:bg-gray-200' style={{ boxShadow: '0px 3px 2px 0.02px gray' }}>Login</button>
                            <button onClick={() => { navigate('/register') }} className='pl-3 pr-3 pb-2.5 pt-2.5 m-1 min-w-[150px] rounded-md bg-gray-50 duration-300 hover:bg-gray-200' style={{ boxShadow: '0px 3px 2px 0.02px gray' }}>Register</button>
                        </div>
                        {/* <button className='pl-3 pr-3 pb-2.5 pt-2.5 m-1 min-w-[100px] rounded-md bg-gray-300'>Profile</button> */}
                    </motion.div>

                </div>
                <motion.img
                    initial={{ position: 'absolute', left: 1000, opacity: 0, }}
                    animate={{ opacity: 1, position: 'relative', left: 0, }}
                    transition={{ duration: 1 }}
                    src={carImage}
                    className='md:w-[55%] sm:w-[90%] md:mt-16 sm:mt-10 z-20 md:block sm:block hidden'
                    alt='Sport Car'
                />
            </div>
            <Catalog />
        </div>
    )
}
