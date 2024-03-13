import { useState } from "react";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
function Time({ State, City }) {
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
		const isDaytime = hours >= 6 && hours < 18;
		setDate({
			hours: convertedHours,
			isDaytime: isDaytime,
			minutes: minutes,
			seconds: seconds,
			timeOfDay: timeOfDay,
		});
		return () => clearInterval();
	}, 1000);

	return (
		<>
			<div className="flex gap-3 items-center">
				{date.isDaytime ? (
					<img className="w-5 h-5" src={sunIcon} alt="Sun Icon"></img>
				) : (
					<img className="w-5 h-5" src={moonIcon} alt="Moon Icon"></img>
				)}
				<p className="text-grayish inter-text">{date.timeOfDay}</p>
			</div>
			<div style={{ display: "flex", flexDirection: "column" }}>
				<p className=" text-[100px] font-bold">
					{date.hours}:{date.minutes < 10 ? `0${date.minutes}` : date.minutes}
					<span className="text-sm">
						{date.convertedHours > 12 ? `Pm` : "Am"}
					</span>
					<p className="text-sm">
						{State}, {City}
					</p>
				</p>
			</div>
		</>
	);
}

export default Time;
