const trickList = {
	stance: ["switch", "nollie", "fackie"],
	flips: [
		"kickflip",
		"heelflip",
		"varialflip",
		"varialheel",
		"treflip",
		"popshovit",
	],
	spins: ["", "180", "360"],
};

const generateRandomTrick = (trickList) => {
	const randomFlip = Math.floor(Math.random() * trickList.flips.length);
	const randomSpin = Math.floor(Math.random() * trickList.spins.length);
	const randomStance = Math.floor(Math.random() * trickList.stance.length);
	return `${trickList.stance[randomStance]} ${trickList.spins[randomSpin]} ${trickList.flips[randomFlip]}`;
};

export { trickList, generateRandomTrick };
