import PropTypes from "prop-types";
import { useState } from "react";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import Nav from "../component/nav";
import Time from "../component/time";
import SpotLocator from "../component/spotLocator";
import { findSpotByName, allSpots } from "../utils/locationDisplay";
import { Link } from "react-router-dom";

function Home({
	Weather,
	Coord,
	City,
	State,
	Trick,
	RandomLocation,
	QuoteJoke,
}) {
	const [isUpsideDown, setIsUpsideDown] = useState(false);

	const spotFound = findSpotByName(allSpots, RandomLocation);

	const [createUrl, setCreateUrl] = useState({
		name: spotFound.name.replace(/\s+/g, ""),
		url: spotFound.urlPath,
	});
	const handleImageClick = () => {
		setIsUpsideDown(!isUpsideDown);
	};

	return (
		<>
			<div className="relative bg-[url('./assets/mobile/bg-image-daytime.jpg')] h-screen bg-cover">
				{/* Overlay with opacity */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				{/* Content */}
				<div className="relative text-white gap-4 flex flex-col  justify-between h-full">
					<div className=" py-10 px-6 ">
						<div className="flex">
							<p className="opacity-70 text-[13px] text-white">{QuoteJoke}</p>
							{/* <img
								className="w-5 h-5"
								src={iconRefresh}
								alt="Refresh Icon"
							></img> */}
							<Nav />
						</div>
						<p className="inter-text text-[14px] mt-1">ChuckNorris</p>
					</div>

					{!isUpsideDown ? (
						<SpotLocator
							Latitude={Coord.latitude}
							Longitude={Coord.longitude}
						/>
					) : (
						<div></div>
					)}
					<div className="opacity-95 text-white  px-6 flex flex-col">
						<Time State={State} City={City} />
						<div>
							<div className="flex gap-1">
								<p>Forcast:</p>
								{Weather.forcast.map((res, index) => {
									return (
										<p key={index} className="capitalize">
											{res.description},
										</p>
									);
								})}
							</div>
							<p>Temp: {Weather.temperature} F</p>
							<p>Wind: {Weather.wind} Mph</p>
						</div>
						<div onClick={handleImageClick} className="mt-[30px]">
							<button
								style={{ fontSize: "13px", letterSpacing: "5px" }}
								className="button H-three"
							>
								{isUpsideDown ? "Less" : "More"}
								<div className="flex justify-center items-center h-7 w-7 bg-[#303030] rounded-full">
									<img
										className={`h-2 w-3  ${isUpsideDown ? "rotate-180" : ""}`}
										src={arrowDown}
										alt="Arrow Down"
									/>
								</div>
							</button>
						</div>
					</div>

					{!isUpsideDown ? (
						""
					) : (
						<div className="lower-tab font-black">
							<div className="flex justify-between px-10 pt-10 pb-2">
								<h4 className="text-nowrap">Trick of the day</h4>
								<h4>{Trick}</h4>
							</div>
							<div className="flex justify-between px-10 py-1">
								<h4 className="text-nowrap ">Inspiration</h4>
								<a>Link to vid</a>
							</div>
							<div className="flex justify-between px-10 py-2">
								<h4 className="text-nowrap">Spot Check</h4>
								<a href={`/${createUrl?.url}#${createUrl?.name}`}>
									{createUrl.name}
								</a>
							</div>
							<div className="flex justify-between px-10 pb-6 pt-2">
								<h4 className="text-nowrap">Upcoming event</h4>
								<h4>event name</h4>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

Home.propTypes = {
	Weather: PropTypes.object.isRequired,
	City: PropTypes.string.isRequired,
	State: PropTypes.string.isRequired,
	Coord: PropTypes.object.isRequired,
	Trick: PropTypes.string.isRequired,
	RandomLocation: PropTypes.string.isRequired,
	QuoteJoke: PropTypes.string.isRequired,
};
export default Home;
