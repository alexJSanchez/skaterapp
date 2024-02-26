import {
	calculateDistance,
	findClosestLocation,
} from "../utils/distanceTracker";
import starIcon from "../assets/star_fill_icon.png";
import skateIcon from "../assets/skateboard-icon.png";
import ImageSlider from "./slider.jsx";
import { findSpotByName, allSpots } from "../utils/locationDisplay.js";
import location from "../Coord.js";

function SpotLocator({ Latitude, Longitude }) {
	const closestLocation = findClosestLocation(Latitude, Longitude, location);
	console.log("Closest location:", closestLocation);
	const spotInfo = findSpotByName(allSpots, closestLocation.name);
	if (!closestLocation) {
		return <div>....loading</div>;
	}

	return (
		<div className="flex flex-col items-center rounded-lg shadow-md p-4 relative">
			<div className="absolute inset-0 opacity-10 rounded-lg"></div>

			<h1 className="text-2xl font-bold text-gray-300 uppercase">Near you</h1>
			<h2 className=" text-[2rem] uppercase">{spotInfo.name}</h2>
			<div className="flex justify-center">
				{[...Array(spotInfo.bust.level)].map((_, index) => (
					<img
						className="w-5 shadow-md shadow-black"
						key={index}
						src={`${starIcon}`}
						alt={`Image ${index + 1}`}
					/>
				))}
			</div>
			<h2 className="text-lg font-semibold text-gray-300">Wanted</h2>

			<div
				style={{
					borderStyle: "dotted",
					borderWidth: "1px",
				}}
				className="w-full my-4"
			></div>
			{/* <ImageSlider images={spotInfo.images} /> */}
		</div>
	);
}

export default SpotLocator;
