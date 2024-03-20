import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import arrowDown from "../assets/desktop/icon-arrow-down.svg";
import Nav from "../component/nav";
import Time from "../component/time";
import Popup from "../component/popup";
import SpotLocator from "../component/spotLocator";
import { findSpotByName, allSpots } from "../utils/locationDisplay";
import GetTime from "../utils/getTime";
import starIcon from "../assets/star_fill_icon.png";
import dayBgImage from "../assets/desktop/bg-image-daytime.jpg";
import nightBgImage from "../assets/desktop/bg-image-nighttime.jpg";

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
	const [popup, setPopup] = useState(true);
	const [mapUrl, setMapUrl] = useState();
	const [spotFound, setSpotFound] = useState();

	const { isDaytime } = GetTime();

	useEffect(() => {
		const foundSpot = findSpotByName(allSpots, RandomLocation);
		setSpotFound(foundSpot);
		setMapUrl(foundSpot);
	}, []); // Only re-run the effect if RandomLocation changes

	const handlePopup = () => {
		setPopup(!popup);
	};
	const handleImageClick = () => {
		setIsUpsideDown((prevIsUpsideDown) => !prevIsUpsideDown);
	};

	return (
		<>
			<div
				style={{
					backgroundImage: `url(${isDaytime ? dayBgImage : nightBgImage})`,
				}}
				className="relative h-screen bg-cover"
			>
				{/* Overlay with opacity */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				{/* Content */}
				<div className="relative text-white gap-4 flex flex-col justify-between h-full">
					<div className=" py-10 px-6 flex justify-between">
						<div className="flex flex-col">
							<p className="opacity-70 text-[13px] text-white">{QuoteJoke}</p>
							{/* <img
								className="w-5 h-5"
								src={iconRefresh}
								alt="Refresh Icon"
							></img> */}
							<p className="inter-text text-[14px] mt-1">ChuckNorris</p>
						</div>
						<Nav />
					</div>
					{isUpsideDown ? null : (
						<SpotLocator
							Latitude={Coord.latitude}
							Longitude={Coord.longitude}
						/>
					)}
					{popup ? null : (
						<Popup
							Name={spotFound.name}
							Star={starIcon}
							Images={spotFound.images}
							Bust={spotFound.bust.level}
							Status={spotFound.bust.status}
							Summary={spotFound.summary}
							HandlePopup={handlePopup}
							Maps={mapUrl.maps}
						/>
					)}
					<div className="opacity-95 text-white  px-6 flex flex-col">
						<Time State={State} City={City} />
						<div>
							<div className="flex gap-1">
								<p>Forcast:</p>
								{Array.isArray(Weather.forcast) ? (
									Weather.forcast.map((res, index) => {
										return (
											<p key={index} className="capitalize">
												{res.description}
											</p>
										);
									})
								) : (
									<p>{Weather.forcast}</p>
								)}
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
					{isUpsideDown ? (
						<div className="lower-tab font-black">
							<div className="flex justify-between px-10 pt-10 pb-2">
								<h4 className="text-nowrap">Trick of the day</h4>
								<h4>{Trick}</h4>
							</div>
							<div className="flex justify-between px-10 py-1">
								<h4 className="text-nowrap ">Inspiration</h4>
								<a>Link to vid</a>
							</div>
							<div
								onClick={handlePopup}
								className="flex justify-between px-10 py-2"
							>
								<h4 className="text-nowrap">Spot Check</h4>
								<p>{spotFound.name}</p>
							</div>
							<div className="flex justify-between px-10 pb-6 pt-2">
								<h4 className="text-nowrap">Upcoming event</h4>
								<h4>event name</h4>
							</div>
						</div>
					) : null}
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
// <a href={`/${createUrl?.url}#${createUrl?.name}`}>{createUrl.name}</a>//
