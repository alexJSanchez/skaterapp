import { useState } from "react";
import sunIcon from "../assets/desktop/icon-sun.svg";
function Time() {
	const [date, setDate] = useState({
		hours: "0",
		minutes: "0",
		seconds: "",
		timeOfDay: "time of day",
	});
	setInterval(() => {
		let currentTime = new Date();
		let timeOfDay = "";
		const hours = currentTime.getHours();
		const minutes = currentTime.getMinutes();
		const seconds = currentTime.getSeconds();
		if (hours >= 0 && hours < 6) {
			timeOfDay = "Good Morning";
		} else if (hours >= 6 && hours < 12) {
			timeOfDay = "Good Morning";
		} else if (hours >= 12 && hours < 18) {
			timeOfDay = "Good Afternoon";
		} else {
			timeOfDay = "Good Evening";
		}
		const convertedHours = hours % 12 || 12;
		setDate({
			hours: convertedHours,
			minutes: minutes,
			seconds: seconds,
			timeOfDay: timeOfDay,
		});
		return () => clearInterval();
	}, 1000);

	return (
		<>
			<div className="flex gap-3 items-center">
				<img className="w-5 h-5" src={sunIcon} alt="Sun Icon"></img>
				<p className="text-grayish inter-text">{date.timeOfDay}</p>
			</div>
			<div>
				<p className="inter-text text-[100px] font-bold">
					{date.hours}:{date.minutes < 10 ? `0${date.minutes}` : date.minutes}
					<span className="text-sm">{date.hours > 12 ? `Pm` : "Am"}</span>
				</p>
			</div>
		</>
	);
}

export default Time;
