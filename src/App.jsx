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
import { getTricks, trickList } from "./utils/randomSkateTricks";
import { getLocations } from "./utils/randomSpot";
import locations from "./Coord";

function App() {
	const [weather, setWeather] = useState({
		temperature: "0.00",
		wind: "0.00",
		forecast: [],
	});
	const [trick, setTrick] = useState("");
	const [coord, setCoord] = useState({
		latitude: null,
		longitude: null,
	});
	const [city, setCity] = useState("City");
	const [locality, setLocality] = useState("State");
	const [loading, setLoading] = useState(true);
	const [randomLocation, setRandomLocation] = useState("");
	const [funnyQuote, setFunnyQuote] = useState("");

	useEffect(() => {
		const loadStoredData = () => {
			const storedWeatherData = localStorage.getItem("weatherData");
			const storedGeoData = localStorage.getItem("geoData");
			const storedTrickData = localStorage.getItem("trickData");
			const storedRandomLocation = localStorage.getItem("randomLocation");
			const storedQuote = localStorage.getItem("quote");

			if (
				!storedWeatherData ||
				!storedGeoData ||
				!storedTrickData ||
				!storedRandomLocation ||
				!storedQuote
			) {
				return false;
			}

			try {
				const savedWeather = JSON.parse(storedWeatherData);
				const parsedGeoData = JSON.parse(storedGeoData);
				const parsedTrickData = JSON.parse(storedTrickData);

				setWeather(savedWeather);
				setFunnyQuote(storedQuote);
				setCity(parsedGeoData.city || "City");
				setLocality(parsedGeoData.locality || parsedGeoData.State || "State");
				setCoord(parsedGeoData.coord || { latitude: null, longitude: null });
				setTrick(parsedTrickData.trick || "");
				setRandomLocation(storedRandomLocation);
				setLoading(false);
				return true;
			} catch (error) {
				console.error("Error parsing stored app data:", error);
				return false;
			}
		};

		const fetchData = async () => {
			try {
				const ninjaKey = import.meta.env.VITE_NINJA_KEY;
				const url = "https://api.api-ninjas.com/v1/chucknorris";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"X-Api-Key": ninjaKey,
					},
				});

				if (!response.ok) {
					throw new Error(`Chuck Norris API error: ${response.status}`);
				}

				const quoteData = await response.json();
				const quote = quoteData.joke || "";
				setFunnyQuote(quote);
				localStorage.setItem("quote", quote);

				const position = await new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject);
				});

				const { latitude, longitude } = position.coords;
				const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
				const geoResponse = await fetch(geoApiUrl);

				if (!geoResponse.ok) {
					throw new Error(`Geolocation API error: ${geoResponse.status}`);
				}

				const geoData = await geoResponse.json();
				const normalizedCoord = { latitude, longitude };

				setCity(geoData.city || "City");
				setLocality(geoData.locality || geoData.principalSubdivision || "State");
				setCoord(normalizedCoord);
				localStorage.setItem(
					"geoData",
					JSON.stringify({
						city: geoData.city || "City",
						locality: geoData.locality || geoData.principalSubdivision || "State",
						coord: normalizedCoord,
					})
				);

				const apiKey = import.meta.env.VITE_WEATHER_KEY;
				const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
				const weatherResponse = await fetch(weatherUrl);

				if (!weatherResponse.ok) {
					throw new Error(`Weather API error: ${weatherResponse.status}`);
				}

				const weatherData = await weatherResponse.json();
				const weatherState = {
					temperature: weatherData.main?.temp ?? "0.00",
					wind: weatherData.wind?.speed ?? "0.00",
					forecast: Array.isArray(weatherData.weather)
						? weatherData.weather
						: [],
				};

				setWeather(weatherState);
				localStorage.setItem("weatherData", JSON.stringify(weatherState));

				const chosenTrick = getTricks(trickList);
				setTrick(chosenTrick);
				localStorage.setItem("trickData", JSON.stringify({ trick: chosenTrick }));

				const chosenRandomLocation = getLocations(locations);
				setRandomLocation(chosenRandomLocation);
				localStorage.setItem("randomLocation", chosenRandomLocation);

				setLoading(false);
			} catch (error) {
				console.error("Error fetching app data:", error);
				setLoading(false);
			}
		};

		if (!loadStoredData()) {
			fetchData();
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
									RandomLocation={randomLocation}
									QuoteJoke={funnyQuote}
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
						<Route path="/westVillageTribeca" element={<WestVillageTribeca />} />
					</Routes>
				</BrowserRouter>
			)}
		</>
	);
}

export default App;
