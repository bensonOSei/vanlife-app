import { Link } from "react-router-dom";
import aboutImg from "../assets/about-hero.png";

export const About = () => {
	return (
		<div className="sm:h-screen">
			<div className="bg-slate-800 w-full h-72 mb-7">
				<img src={aboutImg} alt="about hero" className="w-full h-full object-cover" />
			</div>

			<div className="flex flex-col  p-5 gap-3 text-sm">
				<h1 className="font-bold text-3xl">
					Don’t squeeze in a sedan when you could relax in a van.
				</h1>

				<p>
					Our mission is to enliven your road trip with the perfect
					travel van rental. Our vans are recertified before each trip
					to ensure your travel plans can go off without a hitch.
					(Hitch costs extra 😉)
				</p>
				<p>
					Our team is full of vanlife enthusiasts who know firsthand
					the magic of touring the world on 4 wheels.
				</p>

				<div className="bg-orange-200 p-5 rounded-md mt-6 mb-3">
					<h2 className="font-bold text-xl mb-4" >Your destination is waiting.<br></br> Your van is ready.</h2>
                     <Link to="/vans" className="text-white bg-black hover:bg-slate-900 inline-block px-4 py-3 rounded-lg" >Explore more vans</Link>
				</div>
			</div>
		</div>
	);
};
