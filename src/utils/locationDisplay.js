import spots from "../Data";
const allSpots = [
	...spots.Bronx,
	...spots.Brooklyn,
	...spots.FinancialDistrict,
	...spots.LowerEastSide,
	...spots.Midtown,
	...spots.Queens,
	...spots.StatenIsland,
	...spots.UptownHarlem,
	...spots.WestVillageTribeca,
];
function findSpotByName(array, name) {
	return array.find((obj) => obj.name === name);
}

export { findSpotByName, allSpots };
