/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { VanLabel } from "../Elements/VanLabel";
import { Link } from "react-router-dom";

export const VanCard = () => {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch("/api/vans")
			.then((res) => res.json())
			.then((data) => setVans([data.vans][0]));
	}, []);

	// vans.forEach(van => console.log(van.id));

	return (
		<>
			{vans.length === 0 ? (
				<h2 className="font-bold text-3xl">Loading</h2>
			) : (
				vans.map((van) => (
					<div
						className=" w-40 sm:w-72 p-2"
						key={van.id}>
						<Link to={`/vans/${van.id}`}>
							<div className="w-full h-40 sm:h-72 bg-slate-200 rounded-md overflow-hidden">
								<img
									src={van.imageUrl}
									alt={van.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="font-semibold flex gap-1 justify-between mt-4 mb-2">
								<h2 className="text-md">{van.name}</h2>
								<p className=" leading-none">
									${van.price} <br />
									<span className="font-normal text-sm">
										/day
									</span>
								</p>
							</div>
							<VanLabel type={van.type} />
						</Link>
					</div>
				))
			)}
		</>
	);
};
