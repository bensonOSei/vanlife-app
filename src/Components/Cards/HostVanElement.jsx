/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export const HostVanElement = ( {id, name, price, imageUrl} ) => {
	return (
		<Link to={`/host/vans/${id}`} key={id} >
			<div className="flex gap-2 items-center bg-white px-4 py-3 rounded-md" key={id} >
				<div className="w-20 h-20 bg-slate-100 rounded-md overflow-hidden">
                    <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                </div>
				<div>
					<h2 className="font-semibold text-lg">{name}</h2>
					<p>${price}/day</p>
				</div>
			</div>
		</Link>
	);
};
