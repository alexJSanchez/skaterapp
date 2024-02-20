import { useState, useEffect } from "react";
const { geolib } = require("geolib");
import "./App.css";

function App() {
	const [state, setState] = useState({ title: "event name", image: "" });

	useEffect(() => {
		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition((position) => {
				const { latitude, longitude } = position.coords;
				const address = geolib.reverseGeocode({
					latitude: latitude,
					longitude: longitude,
				});
				console.log(address);
			});
		} else {
			console.log("no geo location");
		}
	}, []);

	return (
		<>
			<h1>SKATE EVENT LOG</h1>
			<div>
				<img></img>
				<h2>{state.title}</h2>
				<p></p>
			</div>
		</>
	);
}

export default App;
