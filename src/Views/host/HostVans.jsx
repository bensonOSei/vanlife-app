import { useEffect, useState } from "react";
// import { HostVanElement } from "../../Components/Cards/HostVanElement";
import { Link } from "react-router-dom";

export const HostVans = () => {
	const [vans, setVans] = useState([]);

	useEffect(() => {
		fetch("/api/host/vans")
			.then((res) => res.json())
			.then((data) => setVans([data.vans]));
	}, []);

	console.log(vans[0]);
	return (
		<section className="h-screen p-5">
			<h1 className="font-bold text-3xl mb-10">Your listed vans</h1>
			{vans.length > 0 ? (
				vans[0].map((van) => (
					<Link
						to={`${van.id}`}
						key={van.id}>
						<div
							className="flex gap-2 items-center bg-white px-4 py-3 rounded-md mb-5"
							key={van.id}>
							<div className="w-20 h-20 bg-slate-100 rounded-md overflow-hidden">
								<img
									src={van.imageUrl}
									alt={van.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h2 className="font-semibold text-lg">
									{van.name}
								</h2>
								<p>${van.price}/day</p>
							</div>
						</div>
					</Link>
				))
			) : (
				<p className="font-bold text-2xl">Loading...</p>
			)}
		</section>
	);
};
