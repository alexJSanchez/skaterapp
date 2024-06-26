import ABCLedges0 from "./ABCLedges/0.png";
import ABCLedges1 from "./ABCLedges/1.png";
import ABCLedges2 from "./ABCLedges/2.png";
import ABCLedges3 from "./ABCLedges/3.png";
import ABCLedges4 from "./ABCLedges/4.png";

const spots = [
	{
		name: "ABC Ledges",
		area: "Staten Island",
		urlPath: "statenIsland",
		summary:
			"Four double-sided concrete ledges in a schoolyard on parking lot-esque ground. They’ve been skated for two decades at this point, so they’ve seen better days.",
		bust: {
			level: 1,
			status: "You’re not allowed to skate here. Weekend spot.",
		},
		location: {
			latitude: 40.510720065535835,
			longitude: -74.23051845779361,
			text: "Page Avenue and Haywood Street in Staten Island. It’s only accessible by car and very far from Manhattan.",
		},
		images: {
			0: ABCLedges0,
			1: ABCLedges1,
			2: ABCLedges2,
			3: ABCLedges3,
			4: ABCLedges4,
		},
		maps: `https://www.google.com/maps?ll=40.510353,-74.230497&z=16&t=m&hl=en&gl=US&mapclient=embed&q=555+Page+Ave+Staten+Island,+NY+10307`,
	},
];
export default spots;
