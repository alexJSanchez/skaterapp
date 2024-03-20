import { useState } from "react";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import GetTime from "../utils/getTime";
function Time({ State, City }) {
	const [date, setDate] = useState({
		hours: "0",
		minutes: "0",
		seconds: "",
		isDaytime: true,
		timeOfDay: true,
	});
	setInterval(() => {
		const { convertedHours, isDaytime, minutes, seconds, timeOfDay } =
			GetTime();
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
			<div className="flex flex-col">
				<p className=" text-[100px] font-bold">
					{date.hours}:{date.minutes < 10 ? `0${date.minutes}` : date.minutes}
					<span className="text-sm">
						{date.convertedHours > 12 ? `Pm` : "Am"}
					</span>
				</p>
			</div>
			<p className="text-sm">
				{State}, {City}
			</p>
		</>
	);
}

export default Time;
