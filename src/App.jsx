import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Loading from "./component/loading";
import { getTricks, trickList } from "./skateTricks";

function App() {
	const [weather, setWeather] = useState({
		temperature: "0.00",
		wind: "0.00",
		forcast: "forcast",
	});
	const [trick, setTrick] = useState("kickflip");
	const [coord, setCoord] = useState({
		latitude: null,
		longitude: null,
	});
	const [city, setCity] = useState("City");
	const [locality, setLocality] = useState("State");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true); // Set loading to true when starting geolocation lookup
		const fetchData = async () => {
			try {
				setTrick(getTricks(trickList));
				const position = await new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject);
				});
				const { latitude, longitude } = position.coords;
				const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
				const geoResponse = await fetch(geoApiUrl);
				const geoData = await geoResponse.json();
				console.log("above parsed", geoData);
				setCity(geoData.city);
				setLocality(geoData.locality);
				setCoord({ latitude: geoData.latitude, longitude: geoData.longitude }); // Use position.coords directly
				localStorage.setItem(
					"geoData",
					JSON.stringify({
						city: geoData.city,
						locality: geoData.locality,
						coord: { latitude: geoData.latitude, longitude: geoData.longitude },
					})
				);
				localStorage.setItem(
					"trickData",
					JSON.stringify({
						trick: trick,
					})
				);

				const apiKey = "f5d7f601d3073301b1ec26e017b93446";
				const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
				const weatherResponse = await fetch(weatherUrl);
				const weatherData = await weatherResponse.json();

				setWeather({
					temperature: weatherData.main.temp,
					wind: weatherData.wind.speed,
					forcast: weatherData.weather,
				});
				localStorage.setItem(
					"weatherData",
					JSON.stringify({
						temperature: weatherData.main.temp,
						wind: weatherData.wind.speed,
						forcast: weatherData.weather,
					})
				);

				setLoading(false); // Set loading to false when data is fetched
			} catch (error) {
				console.error("Error fetching geolocation:", error);
				setLoading(false); // Set loading to false if there's an error
			}
		};
		const storedWeatherData = localStorage.getItem("weatherData");
		const storedGeoData = localStorage.getItem("geoData");
		const storedTrickData = localStorage.getItem("trickData");
		if (!storedWeatherData || !storedGeoData) {
			fetchData();
		} else {
			setLoading(true);
			setWeather(JSON.parse(storedWeatherData));
			const parsedGeoData = JSON.parse(storedGeoData);
			const parsedTrickData = JSON.parse(storedTrickData);
			console.log("geo data", parsedGeoData, storedTrickData);
			setCity(parsedGeoData.city);
			setLocality(parsedGeoData.State);
			setLocality(parsedGeoData.locality);
			setCoord(parsedGeoData.coord);
			setLoading(false);
			setTrick(parsedTrickData);
		}
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<BrowserRouter>
					<Routes>
						<Route
							path="/"
							element={
								<Home
									Weather={weather}
									City={city}
									State={locality}
									Coord={coord}
									Trick={trick}
								/>
							}
						/>
						<Route path="/bronx" element={<Bronx />} />
						<Route path="/brooklyn" element={<Brooklyn />} />
						<Route path="/financialDistrict" element={<FinancialDistrict />} />
						<Route path="/lowerEastSide" element={<LowerEastSide />} />
						<Route path="/queens" element={<Queens />} />
						<Route path="/midTown" element={<MidTown />} />
						<Route path="/statenIsland" element={<StatenIsland />} />
						<Route path="/uptownHarlem" element={<UptownHarlem />} />
						<Route
							path="/westVillageTribeca"
							element={<WestVillageTribeca />}
						/>
					</Routes>
				</BrowserRouter>
			)}
		</>
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
