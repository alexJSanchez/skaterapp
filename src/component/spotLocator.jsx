import React from "react";
import { useState } from "react";
import { findClosestLocation } from "../utils/distanceTracker";
import starIcon from "../assets/star_fill_icon.png";
import ImageSlider from "./slider.jsx";
import { findSpotByName, allSpots } from "../utils/locationDisplay.js";
import location from "../Coord.js";
import Popup from "./popup.jsx";

function SpotLocator({ Latitude, Longitude, IsUpsideDown }) {
	const closestLocation = findClosestLocation(Latitude, Longitude, location);

	const spotInfo = findSpotByName(allSpots, closestLocation.name);

	const [displayPopup, setDisplayPopup] = useState(false);

	function PopupHandler() {
		setDisplayPopup(!displayPopup);
	}

	if (!closestLocation) {
		return <div>....loading</div>;
	}

	return (
		<div>
			<div>
				<div
					onClick={PopupHandler}
					className="flex flex-col items-center rounded-lg shadow-md p-4 relative"
				>
					<div className="absolute inset-0 bg-black opacity-10 rounded-lg"></div>
					<h1 className="text-2xl font-bold text-gray-300 uppercase">
						Near you
					</h1>
					<h2 className="text-[2rem] uppercase">{spotInfo.name}</h2>
					<div className="flex justify-center">
						{[...Array(spotInfo.bust.level)].map((_, index) => (
							<img
								className="w-5 shadow-md shadow-black"
								key={index}
								src={`${starIcon}`}
								alt={`Image ${index + 1}`}
							/>
						))}
					</div>
					<h2 className="text-lg font-semibold text-gray-300">Wanted</h2>
				</div>

				{/* <ImageSlider images={spotInfo.images} /> */}
			</div>
			{displayPopup ? (
				<Popup
					Name={spotInfo.name}
					Star={starIcon}
					Images={spotInfo.images}
					Bust={spotInfo.bust.level}
					Status={spotInfo.bust.status}
					Summary={spotInfo.summary}
					HandlePopup={PopupHandler}
				/>
			) : (
				""
			)}
		</div>
	);
}

export default SpotLocator;
