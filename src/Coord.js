import Data from "./Data";

const locations = [];

const mapLocations = (locationData) => {
	locationData.forEach((spot) => {
		locations.push({
			name: spot.name,
			longitude: spot.location.longitude,
			latitude: spot.location.latitude,
		});
	});
};

mapLocations(Data.Bronx);
mapLocations(Data.Brooklyn);
mapLocations(Data.FinancialDistrict);
mapLocations(Data.LowerEastSide);
mapLocations(Data.Midtown);
mapLocations(Data.Queens);
mapLocations(Data.StatenIsland);
mapLocations(Data.UptownHarlem);
mapLocations(Data.WestVillageTribeca);

export default locations;
