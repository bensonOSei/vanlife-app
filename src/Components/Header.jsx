import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="flex flex-row justify-between items-center px-3 py-5">
			<Link
				to="/"
				className="font-extrabold text-2xl">
				#VANLIFE
			</Link>
			<nav className="flex gap-6">
				<Link
					to="/about"
					className="hover:underline">
					About
				</Link>
				<Link
					to="/vans"
					className="hover:underline">
					Vans
				</Link>
			</nav>
		</header>
	);
};
