import axios from "axios"

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