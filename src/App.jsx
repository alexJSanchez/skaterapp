import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import Home from "./layout/home";
import Bronx from "./layout/bronx";
import Brooklyn from "./layout/brooklyn";
import FinancialDistrict from "./layout/financialDistrict";
import LowerEastSide from "./layout/lowerEastSide";
import MidTown from "./layout/midTown";
import Queens from "./layout/queens";
import StatenIsland from "./layout/statenIsland";
import UptownHarlem from "./layout/uptownHarlem";
import WestVillageTribeca from "./layout/westVillageTribeca";

function App() {
	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
				fetch(geoApiUrl)
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem("city", data.city);
						localStorage.setItem("local", data.locality);
						localStorage.setItem(
							"coord",
							JSON.stringify({
								latitude: data.latitude,
								longitude: data.longitude,
							})
						);
					});
				const apiKey = "f5d7f601d3073301b1ec26e017b93446";
				const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
				fetch(weatherUrl)
					.then((res) => res.json())
					.then((data) => {
						localStorage.setItem(
							"weather",
							JSON.stringify({
								temperature: data.main.temp,
								wind: data.wind.speed,
							})
						);
					});
			});
		} else {
			console.log("Please accept location permission");
		}
	}, []);
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bronx" element={<Bronx />} />
				<Route path="/brooklyn" element={<Brooklyn />} />
				<Route path="/financialDistrict" element={<FinancialDistrict />} />
				<Route path="/lowerEastSide" element={<LowerEastSide />} />
				<Route path="/queens" element={<Queens />} />
				<Route path="/midTown" element={<MidTown />} />
				<Route path="/statenIsland" element={<StatenIsland />} />
				<Route path="/uptownHarlem" element={<UptownHarlem />} />
				<Route path="/westVillageTribeca" element={<WestVillageTribeca />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

{
	/* <p className="">{city}</p>
<p>{state}</p>
<p>Temperature:{weather.temperature}</p>
<p>Wind Speed:{weather.wind}</p>
<p>
	{date.hours}:{date.minutes < 10 ? `0${date.minutes}` : date.minutes}
	:{date.seconds < 10 ? `0${date.seconds}` : date.seconds}
</p>
<p className="text-grayish inter-text">{date.timeOfDay}</p>

<button
	style={{ fontSize: "15px", letterSpacing: "5px" }}
	className="button H-three"
>
	More
	<div className="flex justify-center items-center h-8 w-8 bg-[#303030] rounded-full">
		<img className="h-2 w-3" src={arrowDown} alt="Arrow Down" />
	</div>
</button> */
}
