import {
	calculateDistance,
	findClosestLocation,
} from "../utils/distanceTracker";

import location from "../Coord.js";

function SpotLocator({ Latitude, Longitude }) {
	const closestLocation = findClosestLocation(Latitude, Longitude, location);
	console.log("Closest location:", closestLocation);

	return <div></div>;
}

export default SpotLocator;
