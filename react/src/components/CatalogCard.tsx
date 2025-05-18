import { motion } from "framer-motion";
import { CarsInfo } from "../service/carsService";
import dateNormalization from "../utils/dateNormalization";

interface CatalogCardProps {
  car: CarsInfo
}

export default function CatalogCard({ car }: CatalogCardProps) {

  return (
    <motion.div
      initial={{ marginTop: 30, opacity: 0 }}
      whileInView={{ marginTop: 0, y: 0, opacity: 1 }}
      viewport={{ amount: 0.3, once: true }}
      transition={{ duration: 1 }}

      className="flex flex-col m-1.5 border  border-gray-400 rounded-lg hover:border-gray-600 duration-300 shadow-md" >
      <p className="text-xs font-mono ml-4 mt-2 mb-2 text-gray-800">{dateNormalization(car.createdAt)}</p>
      <div className="max-h-[300px] w-[93%] mx-auto rounded-md overflow-hidden bg-black ">
        <img
          className="w-full h-auto object-cover"
          src={car.image}
          alt="Car"
        />
      </div>

      <h3 className="text-center mt-5 font-bold text-2xl uppercase">{car.brand} {car.model}</h3>

      <div className="w-[95%] border-b-2 border-gray-300 mx-auto px-2 pb-2">
        <p className="text-center mt-4 mb-1 text-gray-700 text-sm font-medium">
          Year: <span className="font-semibold">{car.year}</span> &bull;
          Fuel: <span className="capitalize font-semibold">{car.fuel}</span> &bull;
          <span className="font-semibold">{car.mileage}km</span>
        </p>
      </div>

      <p className="text-center m-5 font-extralight">{car.description}</p>

      <h2 className="text-center mb-7 bg-yellow-600 mx-auto shadow-md  p-2.5 w-[87%] rounded-[3px] text-2xl font-bold">{car.price} {car.currency}</h2>

    </motion.div>
  )
}
