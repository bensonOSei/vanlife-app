import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { AppContainer } from "./Components/AppContainer";
import { Vans } from "./Views/Vans";
import { VanDetail } from "./Views/VanDetail";
import { Layout } from "./Components/Layout";

function App() {
	return (
		<>
			<BrowserRouter>
				<AppContainer>
					<Routes>
						<Route element={<Layout />} >
							<Route path="/" element={<Home />} />
							<Route path="/about" element={<About />} />
							<Route path="/vans" element={<Vans />} />
							<Route path="/vans/:id" element={<VanDetail />} />
						</Route>
					</Routes>
				</AppContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
