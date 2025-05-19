import { motion } from "framer-motion"

interface FilterFields {
    label: string,
    name: string,
    type: string
}
const filterFields: FilterFields[] = [
    { label: "Brand", name: "brand", type: "text" },
    { label: "Model", name: "model", type: "text" },
    { label: "Year", name: "year", type: "number" },
    { label: "Price", name: "price", type: "number" },
    { label: "Mileage", name: "mileage", type: "number" },
]

export default function Filter() {

    return (
        <div className={`absolute w-[97%] z-40 top-12  mx-auto`}>
            <div className=' flex justify-center w-full'>
                <motion.div
                    initial={{ marginTop: -70 }}
                    animate={{ marginTop: 2 }}
                    exit={{ marginTop: -80 }}
                    transition={{ duration: 0.5 }}

                    className='flex justify-center items-center h-full'>
                    <form className="flex bg-gray-200 rounded-b-md pb-3 pt-3 pl-5 pr-5 auto-rows-[33px] gap-10"
                        style={{ boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.26)' }}
                    >
                        {filterFields.map(({ label, name, type }) => (

                            <div className="flex w-full justify-between flex-col text-black" key={name}>
                                <label className="mr-2 mb-1 text-center" htmlFor={name}>
                                    {label}
                                </label>

                                <input
                                    className="max-w-[100px] focus:outline-none focus:ring-1 focus:border bg-gray-100 border border-b-black border--black text-center text-black"
                                    style={{ boxShadow: '0px 2px 3px -1.6px black', borderRadius: '4px' }}
                                    type={type}
                                    id={name}
                                    name={name}
                                />
                            </div>
                        ))}


                        <div className='flex justify-between flex-col'>
                            <label className='text-center mb-1' htmlFor='fuel'>Fuel:</label>

                            <select id='fuel' className="max-w-[100px] focus:outline-none focus:ring-1 focus:border bg-gray-100 text-center text-black rounded-sm" style={{ boxShadow: '0px 2px 3px -1.6px black' }}>
                                <option value=''>All</option>
                                <option value='diesel'>Diesel</option>
                                <option value='petrol'>Petrol</option>
                                <option value='electric'>Electric</option>
                            </select>
                        </div>

                        <div className='flex items-center  text-center'>
                            <button type='submit' className='bg-black pl-2.5 pr-2.5 p-1.5 rounded-lg text-gray-200 font-semibold text-[1.5vh] hover:bg-gray-200 hover:text--black duration-500'>Search</button>
                        </div>
                    </form>
                </motion.div>
            </div>

        </div>
    )
}
