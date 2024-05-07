const GetTime = () => {
	const currentTime = new Date();
	const timeOfDay =
		currentTime.getHours() < 12 ? "Good Morning" : "Good Afternoon";
	const formattedTime = currentTime.toLocaleTimeString([], {
		hour: "numeric",
		minute: "2-digit",
		hour12: true,
	});

	return {
		currentTime: formattedTime,
		timeOfDay: timeOfDay,
	};
};

export default GetTime;
