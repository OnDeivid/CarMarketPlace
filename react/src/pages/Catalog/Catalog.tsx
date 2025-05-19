import CatalogCard from "../../components/CatalogCard";

import { useEffect, useState } from "react";
import { CarsInfo, onGetCars } from "../../service/carsService";

export default function Catalog() {

    const [carsData, setCarsData] = useState<CarsInfo[] | null>(null)

    useEffect(() => {
        onGetCars()
            .then(res => setCarsData(res))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="border-t-4 border-primary">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-3 mb-5">
                {carsData ? carsData.map((car: CarsInfo) => {
                    return (
                        <CatalogCard key={car._id} car={car} />
                    )

                }) :
                    <div className="flex justify-center font-bold w-[100dvw] bg-red-900 p-20">
                        <img src="./noCarsPoliceMan.png" alt='police' className="w-[30vh]" />
                        <h1 className="text-3xl self-center uppercase text-white text-center">
                            Oopsie! No cars have been added yet.
                        </h1>
                    </div>
                }

            </div>
        </div>
    )
}
