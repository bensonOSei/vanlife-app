import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { VanLabel } from "../../Components/Elements/VanLabel";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const VanDetail = () => {
	const {id} = useParams();
	const [van, setVan] = useState([]);

	useEffect(() => {
		fetch(`/api/vans/${id}`)
			.then((res) => res.json())
			.then((data) => setVan(data.vans));
	}, [id]);
	return (
		<div className="px-4 sm:h-screen ">
			{van.length !== 0 ? (
				<>
					<div>
						<Link
							to="/vans"
							className="underline">
							<FontAwesomeIcon icon={faArrowLeft} />
							<span className="ml-2">Back to vans</span>
						</Link>
					</div>

					<div className="w-full sm:w-1/2 h-80 bg-slate-300 rounded-md mt-10 overflow-hidden">
						<img
							src={van.imageUrl}
							alt={van.name}
							className="w-full h-full object-cover"
						/>
					</div>

					<div className="my-10">
						<VanLabel type={van.type} />
						<h1 className="text-3xl font-bold mt-2">{van.name}</h1>
						<p className="mt-2 font-bold ">
							${van.price}{" "}
							<span className="font-normal">/day</span>
						</p>
						<p className="mt-2">{van.description}</p>
						<button className="w-full sm:w-fit rounded-md bg-orange-300 hover:bg-orange-400 text-white font-semibold p-3 mt-3">
							Rent this van
						</button>
					</div>
				</>
			) : (
				<h2 className="font-bold text-3xl" >Loading</h2>
			)}
		</div>
	);
};
