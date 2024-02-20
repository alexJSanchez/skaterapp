import { useState, useEffect } from "react";

function App() {
	const [weather, setWeather] = useState({});
	const [city, setCity] = useState("");
	const [state, setLocal] = useState("");
	const [date, setDate] = useState({});

	setInterval(() => {
		let currentTime = new Date();
		let timeOfDay = "";
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const seconds = currentTime.getSeconds();
		if (hours >= 0 && hours < 6) {
			timeOfDay = "Early Morning";
		} else if (hours >= 6 && hours < 12) {
			timeOfDay = "Morning";
		} else if (hours >= 12 && hours < 18) {
			timeOfDay = "Afternoon";
		} else {
			timeOfDay = "Evening";
		}

		setDate({
			hours: hours,
			minutes: minutes,
			seconds: seconds,
			timeOfDay: timeOfDay,
		});
		return () => clearInterval();
	}, 1000);

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
			<div className="bg-[url('./assets/mobile/bg-image-daytime.jpg')] bg-cover opacity-70 ">
				<p className="opacity-70">
					“The science of operations, as derived from mathematics more
					especially, is a science of itself, and has its own abstract truth and
					value.”
				</p>
				<img></img>
				<h2>Good</h2>
				<p>{city}</p>
				<p>{state}</p>
				<p>Temperature:{weather.temperature}</p>
				<p>Wind Speed:{weather.wind}</p>
				<p>
					{date.hours}:{date.minutes < 10 ? `0${date.minutes}` : date.minutes}:
					{date.seconds < 10 ? `0${date.seconds}` : date.seconds}
				</p>
				<p className="text-grayish inter-text">{date.timeOfDay}</p>
			</div>
		</>
	);
}

export default App;
