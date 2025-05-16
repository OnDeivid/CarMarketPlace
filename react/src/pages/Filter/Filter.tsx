import { useState } from 'react'

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

    const [fixedSearch, setFixedSearch] = useState<boolean>(false)

    return (
        <div className={`flex min-h-[330px] w-[97%] rounded-br-[20px] rounded-bl-[20px] ${fixedSearch ? 'shadow-lg' : null} mx-auto`}>
            <div className=' flex justify-center w-full mt-7'>

                <div className='flex justify-center items-center h-full'>
                    <form className="grid grid-cols-3 bg-primary rounded-lg pt-5 pl-10 pr-10 auto-rows-[33px] gap-10"
                        style={{ boxShadow: '0px 10px 10px 0px rgba(0, 0, 0, 0.26)' }}
                    >
                        {filterFields.map(({ label, name, type }) => (

                            <div className="flex w-full justify-between flex-col" key={name}>
                                <label className="mr-2 mb-1 text-center" htmlFor={name}>
                                    {label}
                                </label>

                                <input
                                    className="max-w-[100px] focus:outline-none focus:ring-1 focus:border bg-filterField text-center text-white"
                                    style={{ boxShadow: '0px 2px 3px -1.6px black', borderRadius: '4px' }}
                                    type={type}
                                    id={name}
                                    name={name}
                                />
                            </div>
                        ))}


                        <div className='flex justify-between flex-col'>
                            <label className='text-center mb-1' htmlFor='fuel'>Fuel:</label>

                            <select id='fuel' className="max-w-[100px] focus:outline-none focus:ring-1 focus:border bg-filterField text-center text-white rounded-sm" style={{ boxShadow: '0px 2px 3px -1.6px black' }}>
                                <option value=''>All</option>
                                <option value='diesel'>Diesel</option>
                                <option value='petrol'>Petrol</option>
                                <option value='electric'>Electric</option>
                            </select>
                        </div>

                        <div className='relative left-[293px] -top-1.5 text-center'>
                            <button type='submit' className='bg-white pl-2.5 pr-2.5 p-1.5 rounded-lg text-primary font-semibold text-[1.5vh]'>Search</button>
                        </div>
                    </form>
                </div>

            </div>

        </div>
    )
}
