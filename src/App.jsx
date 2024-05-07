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
	// State for weather, skate trick, geolocation, loading state, etc.
	const [weather, setWeather] = useState({
		temperature: "0.00",
		wind: "0.00",
		forcast: "forcast",
	});
	const [trick, setTrick] = useState(null);
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
		// Function to fetch data
		const fetchData = async () => {
			try {
				// Fetch a random joke from Chuck Norris API
				const ninjaKey = import.meta.env.VITE_NINJA_KEY;
				const url = "https://api.api-ninjas.com/v1/chucknorris";
				const response = await fetch(url, {
					method: "GET",
					headers: {
						"X-Api-Key": ninjaKey,
					},
				});
				if (!response.ok) {
					throw new Error(`http error! status: ${response.status}`);
				}
				const quoteData = await response.json();
				setFunnyQuote(quoteData.joke);
				localStorage.setItem("quote", quoteData.joke);

				// Fetch geolocation data using the browser's geolocation API
				const position = await new Promise((resolve, reject) => {
					navigator.geolocation.getCurrentPosition(resolve, reject);
				});
				const { latitude, longitude } = position.coords;
				const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
				const geoResponse = await fetch(geoApiUrl);
				const geoData = await geoResponse.json();

				// Set geolocation and weather data
				setCity(geoData.city);
				setLocality(geoData.locality);
				setCoord({ latitude: geoData.latitude, longitude: geoData.longitude });
				localStorage.setItem(
					"geoData",
					JSON.stringify({
						city: geoData.city,
						locality: geoData.locality,
						coord: { latitude: geoData.latitude, longitude: geoData.longitude },
					})
				);

				// Fetch weather data using OpenWeatherMap API
				const apiKey = import.meta.env.VITE_WEATHER_KEY;
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

				// Set a random skate trick and a random skate spot
				const chosenTrick = getTricks(trickList);
				setTrick(chosenTrick);
				localStorage.setItem(
					"trickData",
					JSON.stringify({
						trick: chosenTrick,
					})
				);
				const chosenRandomLocation = getLocations(locations);
				const spotName = chosenRandomLocation;
				setRandomLocation(spotName);
				localStorage.setItem("randomLocation", spotName);

				setLoading(false); // Set loading to false when all data is fetched
			} catch (error) {
				console.error("Error fetching geolocation:", error);
				setLoading(false); // Set loading to false if there's an error
			}
		};

		// Check if weather and geolocation data are stored in local storage, if not, fetch data
		const storedWeatherData = localStorage.getItem("weatherData");
		const storedGeoData = localStorage.getItem("geoData");
		const storeTrickData = localStorage.getItem("trickData");
		const storeRandomLocations = localStorage.getItem("randomLocation");
		const storeQuote = localStorage.getItem("quote");

		if (!storedWeatherData || !storedGeoData) {
			fetchData();
		} else {
			// If data is already stored, set state using the stored data
			setLoading(true);
			setWeather(JSON.parse(storedWeatherData));
			const parsedGeoData = JSON.parse(storedGeoData);
			const parseTrickData = JSON.parse(storeTrickData);

			setFunnyQuote(storeQuote);
			setCity(parsedGeoData.city);
			setLocality(parsedGeoData.State);
			setLocality(parsedGeoData.locality);
			setCoord(parsedGeoData.coord);
			setLoading(false);
			setTrick(parseTrickData.trick);
			setRandomLocation(storeRandomLocations);
		}
	}, []);

	return (
		<>
			{loading ? (
				// If loading, display loading component
				<Loading />
			) : (
				// If not loading, render the application components based on the current route
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
