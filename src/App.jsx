import { useState, useEffect } from "react";
import arrowDown from "./assets/desktop/icon-arrow-down.svg";
import iconRefresh from "./assets/desktop/icon-refresh.svg";
import arrowUp from "./assets/desktop/icon-arrow-up.svg";
import Time from "./component/time";

function App() {
	const [weather, setWeather] = useState({
		temperature: "0.00",
		wind: "0.00",
	});
	const [city, setCity] = useState("City");
	const [state, setLocal] = useState("State");

	const [isUpsideDown, setIsUpsideDown] = useState(false);

	const handleImageClick = () => {
		setIsUpsideDown(!isUpsideDown);
	};

	useEffect(() => {
		// if ("geolocation" in navigator) {
		// 	navigator.geolocation.getCurrentPosition((position) => {
		// 		const { latitude, longitude } = position.coords;
		// 		const geoApiUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
		// 		fetch(geoApiUrl)
		// 			.then((res) => res.json())
		// 			.then((data) => {
		// 				console.log(data);
		// 				setCity(data.city);
		// 				setLocal(data.locality);
		// 			});
		// 		const apiKey = "f5d7f601d3073301b1ec26e017b93446";
		// 		const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;
		// 		fetch(weatherUrl)
		// 			.then((res) => res.json())
		// 			.then((data) => {
		// 				setWeather({ temperature: data.main.temp, wind: data.wind.speed });
		// 				console.log(data);
		// 			});
		// 	});
		// } else {
		// 	console.log("Please accept location permission");
		// }
	}, []);

	return (
		<>
			<div className="relative bg-[url('./assets/mobile/bg-image-daytime.jpg')] h-screen bg-cover">
				{/* Overlay with opacity */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				{/* Content */}
				<div className="relative text-white gap-4 flex flex-col justify-between h-full">
					<div className=" py-10 px-6 ">
						<div className="flex">
							<p className="opacity-70 text-[13px] text-white">
								“The science of operations, as derived from mathematics more
								especially, is a science of itself, and has its own abstract
								truth and value.”
							</p>
							<img
								className="w-5 h-5"
								src={iconRefresh}
								alt="Refresh Icon"
							></img>
						</div>
						<p className="inter-text text-[14px] mt-3">Ada Lovelace</p>
					</div>
					<div className="opacity-95 text-white  py-10 px-6   flex flex-col">
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
								More
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
						<p className="lower-tab font-black">
							<div>
								Lorem ipsum dolor, sit amet consectetur adipisicing elit.
								Provident odit ipsa mollitia quam necessitatibus! Harum vitae
								totam, aliquam accusamus atque labore eligendi hic impedit
								voluptatem, adipisci est quisquam numquam cumque.
							</div>
						</p>
					)}
				</div>
			</div>
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
