const trickList = {
	stance: ["switch", "nollie", "fackie", " "],
	flips: [
		"kickflip",
		"heelflip",
		"varialflip",
		"varialheel",
		"treflip",
		"FSpopshovit",
		"BSpopshovit",
	],
	spins: ["180", "360"],
};

function getTricks(trickList) {
	const random = Math.floor(Math.random() * trickList.flips.length);
	console.log(random, trickList.flips[random]);
}

export default { trickList, getTricks };
