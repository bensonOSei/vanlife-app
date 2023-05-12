import { VanCard } from "../../Components/Cards/VanCard"

export const Vans = () => {
  return (
    <div className="px-3">
        <div className="mb-10 mt-5">
            <h1 className="font-bold text-3xl mb-3" >Explore our van options</h1>
            <div className="flex flex-wrap gap-5" >
                <button className="bg-orange-100 hover:bg-orange-200 px-5 py-1 rounded-md">Simple</button>
                <button className="bg-orange-100 hover:bg-orange-200 px-5 py-1 rounded-md">Luxury</button>
                <button className="bg-orange-100 hover:bg-orange-200 px-5 py-1 rounded-md">Ragged</button>
                <button className="underline" >Clear filters</button>
            </div>
        </div>
            <div className="flex flex-wrap mb-10 " >
                <VanCard />

            </div>
    </div>
  )
}
