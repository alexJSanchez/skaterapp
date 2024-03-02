const getLocations = (locations) => {
	const randomArrayNumber = Math.floor(Math.random() * locations.length);
	return locations[randomArrayNumber];
};

export default getLocations;
