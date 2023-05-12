/* eslint-disable react/prop-types */

export const VanLabel = ({ type }) => {
	return (
		<span
			className={`${
				(type === "simple" && "bg-orange-300") ||
				(type === "luxury" && "bg-black") ||
				(type === "rugged" && "bg-slate-500")
			} text-white px-5 py-2 w-fit font-semibold rounded-md inline-block`}>
			<p>{type}</p>
		</span>
	);
};
