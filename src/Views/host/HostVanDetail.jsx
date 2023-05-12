import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink, Outlet, useParams } from "react-router-dom";
import { VanLabel } from "../../Components/Elements/VanLabel";
import { useEffect, useState } from "react";

export const HostVanDetail = () => {
	const { id } = useParams();
	const [van, setVan] = useState(null);

	useEffect(() => {
		fetch(`/api/host/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [id]);

	if (!van) return <p className="font-bold text-2xl">Loading...</p>;
	return (
		<div className="sm:h-screen p-5">
			<Link
				to=".."
				relative="path"
				className="my-10 inline-block">
				<FontAwesomeIcon
					icon={faArrowLeft}
					className="text-slate-400"
				/>
				<span className="hover:underline ml-2 font-semibold">
					Back to all vans
				</span>
			</Link>

			<div className="bg-white p-5 rounded-md ">
				<div className="flex flex-col sm:items-center sm:flex-row gap-5">
					<div className="w-48 h-48 bg-slate-100 rounded-sm overflow-hidden">
						<img
							src={van.imageUrl}
							alt={van.name}
							className="w-full h-full object-cover"
						/>
					</div>
					<div>
						<VanLabel type="simple" />
						<h1 className="font-bold text-xl sm:text-3xl my-3">
							{van.name}
						</h1>
						<p className="font-bold">
							${van.price}
							<span className="font-normal text-sm">
								/day
							</span>{" "}
						</p>
					</div>
				</div>
				<nav className="flex gap-4 my-10">
					<NavLink
						to="."
						end
						className={({isActive}) => {
							return isActive ? "underline font-bold" : "hover:underline hover:font-bold";
						} }>
						Details
					</NavLink>
					<NavLink
						to="pricing"
						className={({isActive}) => {
							return isActive ? "underline font-bold" : "hover:underline hover:font-bold";
						} }>
						Pricing
					</NavLink>
					<NavLink
						to="photos"
						className={({isActive}) => {
							return isActive ? "underline font-bold" : "hover:underline hover:font-bold";
						} }>
						Photos
					</NavLink>
				</nav>
				<Outlet context={{van}} />
			</div>
		</div>
	);
};
