import { useOutletContext } from "react-router-dom";

export const HostVanPhotos = () => {
    const {van} = useOutletContext();
  return (
    <div>
        <div className="w-40 h-40 overflow-hidden rounded-sm bg-slate-100" >
            <img src={van.imageUrl} alt={`Picture of ${van.name}`} className="w-full h-full object-cover" />
        </div>
    </div>
  )
}
