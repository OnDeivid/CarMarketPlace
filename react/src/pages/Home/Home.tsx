import Filter from '../Filter/Filter'

export default function Home() {

    return (
        <div className="bg-background w-screen text-white h-screen">
            <div className='bg-filterBackground p-5'>
                <Filter />
            </div>
        </div>
    )
}
