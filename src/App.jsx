import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./layout/home";
import Bronx from "./layout/bronx";
import Brooklyn from "./layout/brooklyn";
import Queens from "./layout/queens";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/bronx" element={<Bronx />} />
				<Route path="/brooklyn" element={<Brooklyn />} />
				<Route path="/queens" element={<Queens />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;

{
	/* <p className="">{city}</p>
<p>{state}</p>
<p>Temperature:{weather.temperature}</p>
<p>Wind Speed:{weather.wind}</p>
<p>
	{date.hours}:{date.minutes < 10 ? `0${date.minutes}` : date.minutes}
	:{date.seconds < 10 ? `0${date.seconds}` : date.seconds}
</p>
<p className="text-grayish inter-text">{date.timeOfDay}</p>

<button
	style={{ fontSize: "15px", letterSpacing: "5px" }}
	className="button H-three"
>
	More
	<div className="flex justify-center items-center h-8 w-8 bg-[#303030] rounded-full">
		<img className="h-2 w-3" src={arrowDown} alt="Arrow Down" />
	</div>
</button> */
}
