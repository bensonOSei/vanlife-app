import { Link } from "react-router-dom";
import homeImg from '../assets/home-hero.png';
export const Home = () => {
	return (
		<div className="flex flex-row items-center justify-center h-full bg-slate-950 p-5 relative isolate">
			<img src={homeImg} alt="home hero" className="absolute top-0 left-0 w-full h-full object-fill -z-10 opacity-50"/>
			<div className="text-white">
				<h1 className="text-2xl font-bold mb-3" >You got the travel plans, we got the travel vans.</h1>
				<p className=" text-xs mb-5" >
					Add adventure to your life by joining the #vanlife movement.
					Rent the perfect van to make your perfect road trip.
				</p>
				<Link to="/vans" className=" bg-orange-400 hover:bg-orange-500 transition-all inline-block w-full text-center p-2 rounded-sm font-semibold" >Find your van</Link>
			</div>
		</div>
	);
};
