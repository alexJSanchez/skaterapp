export function calculateDistance(lat1, lon1, lat2, lon2) {
	const R = 6371; // Radius of the earth in km
	const dLat = (lat2 - lat1) * (Math.PI / 180); // deg2rad below
	const dLon = (lon2 - lon1) * (Math.PI / 180);
	const a =
		0.5 -
		Math.cos(dLat) / 2 +
		(Math.cos(lat1 * (Math.PI / 180)) *
			Math.cos(lat2 * (Math.PI / 180)) *
			(1 - Math.cos(dLon))) /
			2;

	return R * 2 * Math.asin(Math.sqrt(a)); // Distance in km
}
export function findClosestLocation(userLat, userLon, locations) {
	let closestLocation = null;
	let closestDistance = Infinity;

	locations.forEach((location) => {
		const distance = calculateDistance(
			userLat,
			userLon,
			location.latitude,
			location.longitude
		);
		if (distance < closestDistance) {
			closestDistance = distance;
			closestLocation = location;
		}
	});

	return closestLocation;
}
