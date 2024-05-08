const GetTime = () => {
	let currentTime = new Date();
	let timeOfDay = "";
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const seconds = currentTime.getSeconds();
	if (hours >= 0 && hours < 6) {
		timeOfDay = "Good Night";
	} else if (hours >= 6 && hours < 12) {
		timeOfDay = "Good Morning";
	} else if (hours >= 12 && hours < 18) {
		timeOfDay = "Good Afternoon";
	} else {
		timeOfDay = "Good Evening";
	}
	const convertedHours = hours % 12 || 12;
	const isDaytime = hours >= 6 && hours < 18;
	return { minutes, seconds, convertedHours, isDaytime, timeOfDay };
};
export default GetTime;
