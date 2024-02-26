import {
	calculateDistance,
	findClosestLocation,
} from "../utils/distanceTracker";
import { findSpotByName, allSpots } from "../utils/locationDisplay.js";
import location from "../Coord.js";

function SpotLocator({ Latitude, Longitude }) {
	const closestLocation = findClosestLocation(Latitude, Longitude, location);
	console.log("Closest location:", closestLocation);
	const spotInfo = findSpotByName(allSpots, closestLocation.name);
	if (!closestLocation) {
		return <div>....loading</div>;
	}

	return <div>{closestLocation.name}</div>;
}

export default SpotLocator;
