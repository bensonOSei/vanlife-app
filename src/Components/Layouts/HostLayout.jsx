import { NavLink, Outlet } from "react-router-dom";

export const HostLayout = () => {
	return (
		<>
			<nav className="flex flex-row gap-5 px-5">
				<NavLink
					to="."
					end
					className={({ isActive }) =>
						isActive ? "underline font-bold" : "hover:underline"
					}>
					Dashboard
				</NavLink>
				<NavLink
					to="income"
					className={({ isActive }) =>
						isActive ? "underline font-bold" : "hover:underline"
					}>
					Income
				</NavLink>
				<NavLink
					to="vans"
					className={({ isActive }) =>
						isActive ? "underline font-bold" : "hover:underline"
					}>
					Vans
				</NavLink>

				<NavLink
					to="reviews"
					className={({ isActive }) =>
						isActive ? "underline font-bold" : "hover:underline"
					}>
					Reviews
				</NavLink>
			</nav>
			<Outlet />
		</>
	);
};
