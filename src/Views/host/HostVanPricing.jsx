import { useOutletContext } from "react-router-dom";

export const HostVanPricing = () => {
    const {van} = useOutletContext();
  return (
    <div>
        <p className="font-bold text-3xl" >${van.price}.00<span className="font-normal text-sm" >/day</span> </p>
    </div>
  )
}
