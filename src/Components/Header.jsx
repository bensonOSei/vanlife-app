import { NavLink } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center px-3 py-5">
			<NavLink
				to="/"
				className="font-extrabold text-2xl">
				#VANLIFE
			</NavLink>
			<nav className="flex gap-6">
				<NavLink
					to="/host"
					className={({ isActive }) => {
						return isActive
							? "underline font-bold"
							: "hover:underline font-semibold text-slate-600";
					}}>
					Host
				</NavLink>
				<NavLink
					to="/about"
					className={({ isActive }) => {
						return isActive
							? "underline font-bold"
							: "hover:underline font-semibold text-slate-600";
					}}>
					About
				</NavLink>
				<NavLink
					to="/vans"
					className={({ isActive }) => {
						return isActive
							? "underline font-bold"
							: "hover:underline font-semibold text-slate-600";
					}}>
					Vans
				</NavLink>
			</nav>
		</header>
	);
};
