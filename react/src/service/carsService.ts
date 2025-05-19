import axios from "axios"
import { CreateAndEditForm } from "../hooks/useForm"

export interface CarsInfo {
    brand: string,
    createdAt: string,
    currency: string,
    description: string,
    fuel: string,
    image: string,
    mileage: number,
    model: string,
    phoneNumber: number,
    price: number,
    userId: string,
    year: number,
    __v: number,
    _id: string
}
export const onGetCars = async (): Promise<CarsInfo[]> => {
    const response = await axios.get('http://localhost:3000/data/home')
    return response.data
}
export const onCreate = async (formValue: CreateAndEditForm, userId: string, phoneNumber: string | number): Promise<any> => {
    try {
        const fullData = { ...formValue, userId, phoneNumber }
        console.log(fullData)
        const response = await axios.post('http://localhost:3000/data/create', fullData);
        console.log(response)
        return 'success'
    } catch (error: any) {
        const message = error?.response?.data?.error || 'Login failed. Please try again.';
        return Promise.reject(new Error(message));
    }
}