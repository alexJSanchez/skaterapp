import { useState, useEffect } from "react";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import iconRefresh from "../assets/desktop/icon-refresh.svg";
import Nav from "../component/nav";
import Time from "../component/time";
import SpotLocator from "../component/spotLocator";

function Home() {
	const [weather, setWeather] = useState({
		temperature: "0.00",
		wind: "0.00",
	});
	const [coord, setCoord] = useState({});
	const [city, setCity] = useState("City");
	const [state, setLocal] = useState("State");

	const [isUpsideDown, setIsUpsideDown] = useState(false);

	const handleImageClick = () => {
		setIsUpsideDown(!isUpsideDown);
	};

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
				fetch(geoApiUrl)
					.then((res) => res.json())
					.then((data) => {
						console.log(data);
						setCity(data.city);
						setLocal(data.locality);
						setCoord({ latitude: latitude, longitude: longitude });
					});
				const apiKey = "f5d7f601d3073301b1ec26e017b93446";
				const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
				fetch(weatherUrl)
					.then((res) => res.json())
					.then((data) => {
						setWeather({ temperature: data.main.temp, wind: data.wind.speed });
						console.log(data);
					});
			});
		} else {
			console.log("Please accept location permission");
		}
	}, []);

	return (
		<>
			<div className="relative bg-[url('./assets/mobile/bg-image-daytime.jpg')] h-screen bg-cover">
				{/* Overlay with opacity */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				{/* Content */}
				<div className="relative text-white gap-4 flex flex-col  justify-between h-full">
					<div className=" py-10 px-6 ">
						<div className="flex">
							<p className="opacity-70 text-[13px] text-white">
								“The science of operations, as derived from mathematics more
								especially, is a science of itself, and has its own abstract
								truth and value.”
							</p>
							{/* <img
								className="w-5 h-5"
								src={iconRefresh}
								alt="Refresh Icon"
							></img> */}
							<Nav />
						</div>
						<p className="inter-text text-[14px] mt-3">Ada Lovelace</p>
					</div>
					<SpotLocator Latitude={coord.latitude} Longitude={coord.longitude} />
					<div className="opacity-95 text-white py-10 px-6 flex flex-col">
						<Time />
						<div>
							<p>
								{state}, {city}
							</p>
							<p>Temp: {weather.temperature} F</p>
							<p>Wind: {weather.wind} Mph</p>
						</div>
						<div onClick={handleImageClick} className="mt-[30px]">
							<button
								style={{ fontSize: "13px", letterSpacing: "5px" }}
								className="button H-three"
							>
								{isUpsideDown ? "Less" : "More"}
								<div className="flex justify-center items-center h-7 w-7 bg-[#303030] rounded-full">
									<img
										className={`h-2 w-3  ${isUpsideDown ? "rotate-180" : ""}`}
										src={arrowDown}
										alt="Arrow Down"
									/>
								</div>
							</button>
						</div>
					</div>

					{!isUpsideDown ? (
						""
					) : (
						<div className="lower-tab font-black">
							<div className="flex justify-between px-10 pt-10 pb-2">
								<h4 className="text-nowrap">Trick of the day</h4>
								<h4>nollie flip</h4>
							</div>
							<div className="flex justify-between  px-10 py-2">
								<h4 className="text-nowrap ">Inspiration</h4>
								<a>Link to vid</a>
							</div>
							<div className="flex justify-between px-10 py-2">
								<h4 className="text-nowrap">Spot Check</h4>
								<h4>SpotName</h4>
							</div>
							<div className="flex justify-between px-10 pb-14 pt-2">
								<h4 className="text-nowrap">Upcoming event</h4>
								<h4>
									{state},{city}
								</h4>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Home;
