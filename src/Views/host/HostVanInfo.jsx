import { useOutletContext } from "react-router-dom";

export const HostVanInfo = () => {
	const {van} = useOutletContext();

	return (
		<div className="flex flex-col gap-5">
			<p>
				<span className="font-semibold">Name:</span>
				<span className="ml-2">{van.name}</span>
			</p>

			<p>
				<span className="font-semibold">Category:</span>
				<span className="ml-2">{van.type}</span>
			</p>
			<p>
				<span className="font-semibold">Description:</span>
				<span className="ml-2">{van.description}</span>
			</p>
			<p>
				<span className="font-semibold">Visibilty:</span>
				<span className="ml-2">Public</span>
			</p>
		</div>
	);
};
