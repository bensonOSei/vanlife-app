import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { AppContainer } from "./Components/AppContainer";
import { Vans } from "./Views/vans/Vans";
import { VanDetail } from "./Views/vans/VanDetail";
import { Layout } from "./Components/Layouts/Layout";
import { Dashboard } from "./Views/host/Dashboard";
import { Income } from "./Views/host/Income";
import { Reviews } from "./Views/host/Reviews";
import { HostLayout } from "./Components/Layouts/HostLayout";
import { HostVans } from "./Views/host/Hostvans";
import { HostVanDetail } from "./Views/host/HostVanDetail";
import { HostVanInfo } from "./Views/host/HostVanInfo";
import { HostVanPricing } from "./Views/host/HostVanPricing";
import { HostVanPhotos } from "./Views/host/HostVanPhotos";

function App() {
	return (
		<>
			<BrowserRouter>
				<AppContainer>
					<Routes>
						<Route path="/" element={<Layout />} >
							<Route index element={<Home />} />
							<Route path="about" element={<About />} />
							<Route path="vans" element={<Vans />} />
							<Route path="vans/:id" element={<VanDetail />} />

							<Route path="host" element={<HostLayout />} >
								<Route index element={<Dashboard />} />
								<Route path="income" element={<Income />} />
								<Route path="reviews" element={<Reviews />} />
								<Route path="vans" element={<HostVans />} />
								<Route path="vans/:id" element={<HostVanDetail />} >
									<Route index element={<HostVanInfo />} />
									<Route path="pricing" element={<HostVanPricing />} />
									<Route path="photos" element={<HostVanPhotos />} />
									
								</Route>
							</Route>
						</Route>
					</Routes>
				</AppContainer>
			</BrowserRouter>
		</>
	);
}

export default App;
