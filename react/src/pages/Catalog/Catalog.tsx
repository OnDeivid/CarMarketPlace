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

                }) : <div>sorry</div>}
                
            </div>
        </div>
    )
}
