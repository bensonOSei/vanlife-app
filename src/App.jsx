import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { AppContainer } from "./Components/AppContainer";

function App() {
	return (
		<>
			<BrowserRouter>
				<AppContainer>
					<header className="flex flex-row justify-between items-center px-2 py-5">
						<Link to="/" className=" font-extrabold text-2xl" >#VANLIFE</Link>
            <nav className="flex gap-6">
              <Link to="/about" className="hover:underline" >About</Link>
              <Link to="/vans" className="hover:underline" >Vans</Link>
            </nav>
					</header>
					<Routes>
						<Route
							path="/"
							element={<Home />}
						/>
						<Route
							path="/about"
							element={<About />}
						/>
					</Routes>
          <footer className="grid place-items-center p-5 bg-slate-800 text-slate-400 text-xs" >
              <p>© 2022 #VANLIFE</p>
          </footer>
				</AppContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
