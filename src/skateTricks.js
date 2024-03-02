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
		" ",
	],
	spins: ["", "180", "360"],
};

const getTricks = (trickList) => {
	const randomFlip = Math.floor(Math.random() * trickList.flips.length);
	const randomSpin = Math.floor(Math.random() * trickList.spins.length);
	console.log(trickList.flips[randomFlip], trickList.spins[randomSpin]);
};

export { trickList, getTricks };
