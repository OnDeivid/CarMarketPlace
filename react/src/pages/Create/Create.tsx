import { useContext, useState } from "react"
import useForm, { CreateAndEditForm } from "../../hooks/useForm"
import { AuthContext } from "../../context/AuthContext"
import { onCreate } from "../../service/carsService"
import formValidation from "../../utils/formValidation"


type CreateField = {
    type: string;
    name: keyof CreateAndEditForm;
    placeHolder: string;
};
const createFields: CreateField[] = [
    { type: 'text', name: 'brand', placeHolder: 'Audi' },
    { type: 'text', name: 'model', placeHolder: 'A7' },
    { type: 'number', name: 'mileage', placeHolder: '350 000' },
    { type: 'number', name: 'price', placeHolder: '20 000' },
    { type: 'number', name: 'year', placeHolder: '2019' },
    { type: 'text', name: 'image', placeHolder: 'http//:....' },
]
export default function Create() {
    const authContext = useContext(AuthContext)

    const userId = authContext?.auth?.payload?._id ?? ''
    const phoneNumber = authContext?.auth?.payload?.phone ?? ''

    const [formErrors, setFormErrors] = useState<Record<string, string> | null>(null)

    const [formValue, onChangeFormValue] = useForm<CreateAndEditForm>({
        year: '',
        mileage: 0,
        fuel: 'Petrol',
        model: '',
        brand: '',
        price: 0,
        description: '',
        currency: 'USD',
        image: '',
    })

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        let error = formValidation<CreateAndEditForm>(formValue)

        if (Object.values(error).length > 0) {
            setFormErrors(error)
            return
        }
        setFormErrors(null)
        try {
            await onCreate(formValue, userId, phoneNumber)

        } catch (err: any) {
            const message = err.message
            setFormErrors({ formError: message })
        }
    }

    return (
        <div className='flex justify-center overflow-hidden justify-items-center items-center bg-gray-200 h-screen'>
            <div className='flex justify-center shadow-lg text-center mt-10 overflow-y-auto rounded-[10px] min-w-[415px] md:min-w-[520px] sm:min-w-[520px] bg-white'>
                <form method="post" onSubmit={handleSubmit} className="flex  max-h-[90vh] flex-col pb-7 mt-6 max-w-[300px] gap-5">
                    <h1 className="font-bold text-2xl -mt-1">Create</h1>
                    <div className="error-message" style={{ color: 'red', textAlign: 'center', fontSize: 10, marginTop: '5px' }}>{formErrors?.formError}</div>
                    <div className="flex flex-col gap-5">
                        {createFields.map(i => {

                            return (
                                <div key={i.name} className="flex -mt-5 gap-5 flex-col ">
                                    <input
                                        className="p-1.5 pl-3 rounded-[3.5px] min-w-[300px] bg-white border border-background text-primary"
                                        onChange={onChangeFormValue}
                                        type={i.type}
                                        name={i.name}
                                        placeholder={i.placeHolder}
                                    />

                                    <p style={{ color: 'red', textAlign: 'center', fontSize: 10,marginBottom:10, marginTop: '-20px' }} className="error-message">{formErrors != null ? formErrors[i.name] : null}</p>
                                </div>
                            )
                        })}

                    </div>
                    <div className="flex flex-row justify-evenly -mt-5 mb-5">
                        <label >Fuel Type:</label>
                        <select id="fuel" name="fuel" onChange={onChangeFormValue} value={formValue.fuel} className=" text-yellow font-bold text-lg">
                            <option value="PETROL">Petrol</option>
                            <option value="DIESEL">Diesel</option>
                            <option value="ELECTRIC">Electric</option>
                        </select>

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formErrors?.fuel}</p>
                    </div>

                    <div className="flex justify-center -mt-5">
                        <label className="self-center">Price: </label>
                        <input className='pl-1 ml-1 max-w-[130px] text-center border-gray-300 outline-none border p-1 focus:border focus:border-black rounded-sm' type="number" id="price" name="price" placeholder='6000' />

                        <select id="currency" name="currency" onChange={onChangeFormValue} value={formValue.currency} className="pl-1 ml-1 outline-none focus:border focus:border-black rounded-sm">
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                            <option value="BGN">BGN</option>
                        </select>

                        <p style={{ color: 'red', textAlign: 'center', fontSize: 12, }} className="error-message">{formErrors?.price}</p>
                    </div>

                    <div className="flex flex-col -mt-2">
                        <label>Description:</label>
                        <textarea
                            value={formValue.description}
                            onChange={onChangeFormValue}
                            className='pl-2 mt-3 min-h-[70px] outline-none border-gray-300 border focus:border focus:border-black rounded-sm max-h-[100px]'
                            name="description"
                        />
                        <p className="error-message">{formErrors?.description}</p>
                    </div>

                    <button type="submit" className="text-white bg-orange-400 border border-primary mx-auto p-2 rounded-[5px] w-[300px] hover:bg-black duration-500">Create</button>

                </form>
            </div>
        </div>
    )
}
