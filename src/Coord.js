import Data from "./Data";

const locations = [];

Data.Bronx.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});
Data.Brooklyn.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});
Data.FinancialDistrict.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});

Data.LowerEastSide.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});
Data.Midtown.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});
Data.Queens.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});
Data.StatenIsland.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});

Data.UptownHarlem.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});

Data.WestVillageTribeca.map((spot) => {
	locations.push({
		name: spot.name,
		longitude: spot.location.longitude,
		latitude: spot.location.latitude,
	});
});
export default locations;
