import AvenueDBumpToBar0 from "./assets/spots/AvenueDBumpToBar/0.jpg";
import AvenueDBumpToBar1 from "./assets/spots/AvenueDBumpToBar/1.jpg";
import BroomeAndAllen0 from "./assets/spots/Broome&Allen/0.jpg";
import BroomeAndAllen1 from "./assets/spots/Broome&Allen/1.jpg";
import BroomeAndAllen2 from "./assets/spots/Broome&Allen/2.jpg";
import CherryStreetLedge0 from "./assets/spots/Broome&Allen/0.jpg";
import CherryStreetLedge1 from "./assets/spots/Broome&Allen/1.jpg";
import CherryStreetLedge2 from "./assets/spots/Broome&Allen/2.jpg";
import ChinatownDoubleSet0 from "./assets/spots/ChinatownDoubleSet/0.jpg";
import ChinatownDoubleSet1 from "./assets/spots/ChinatownDoubleSet/1.jpg";
const spots = [
	{
		name: "Avenue D Bump-To-Bar",
		area: "Chinatown, East Village & L.E.S",
		summary: "Probably the most famous bump-to-bar spot in New York.",
		bust: {
			level: 1,
			status:
				"It’s a school, so you are not allowed to skate here. Come when it is closed (e.g. weekends, summer), and nobody should bother you.",
		},

		location: {
			latitude: "40.719631",
			longitude: "-73.977509",
			text: "Houston Street, just east of Avenue D, on the north side of the street at the school.",
		},
		images: {
			0: AvenueDBumpToBar0,
			1: AvenueDBumpToBar1,
		},
	},
	{
		name: "Broome & Allen",
		area: "Chinatown, East Village & L.E.S.",
		summary:
			"It’s a ~six-foot dirt gap into the street, a weird wedge people use to wallie over the gap from the street, and a ride-on ledge.",
		bust: {
			level: 1,
			status:
				"This is a median in the middle of the street, so nobody cares what you do here. Just ensure you have spotters because everything there is to skate here lands in traffic.",
		},
		location: {
			latitude: "40.718280",
			longitude: "-73.990710",
			text: "Broome Street and Allen Street in the Lower East Side.",
		},
		images: {
			0: BroomeAndAllen0,
			1: BroomeAndAllen1,
			2: BroomeAndAllen2,
		},
	},
	{
		name: "Cherry Street Ledge",
		area: "Chinatown, East Village & L.E.S.",
		summary:
			"It’s a chunky, backside for regular drop down ledge on a sidewalk that gets repainted every once in a while to hide the hell at its surface.",
		bust: {
			level: 1,
			status:
				"It is at a school, so you are not allowed to skate here. Come on weekends or in evenings and nobody should bother you.",
		},
		location: {
			latitude: "40.711500",
			longitude: "-73.985850",
			text: "Cherry Street between Montgomery and Clinton Streets, in front of the school.",
		},
		images: {
			0: CherryStreetLedge0,
			1: CherryStreetLedge1,
			2: CherryStreetLedge2,
		},
	},
	{
		name: "Chinatown Double Set",
		area: "Chinatown, East Village & L.E.S.",
		summary:
			"The best double-set in Manhattan. Four-flat-four with a long, smooth runway and a sidewalk landing, which then leads into a mellow street.",
		bust: {
			level: 2,
			status:
				"You should not get kicked out of here, but there are typically police cars at the end of the sidewalk. The park gets crowded during warmer months, so it is best to go later in the day or when it is cold.",
		},
		location: {
			latitude: "40.715530",
			longitude: "-74.000540",
			text: "Baxter and Bayard Street in Chinatown.",
		},
		images: {
			0: ChinatownDoubleSet0,
			1: ChinatownDoubleSet1,
		},
	},
];

export default spots;
