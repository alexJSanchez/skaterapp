function getLocations(locations) {
	const randomArrayNumber = Math.floor(Math.random() * locations.length);
	const result = locations[randomArrayNumber].name;
	return result;
}

export { getLocations };
