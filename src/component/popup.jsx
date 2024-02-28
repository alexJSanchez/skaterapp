import React from "react";
import X from "../assets/X.png";
import ImageSlider from "./slider.jsx";
import { Link } from "react-router-dom";

function Popup({ Name, Bust, Summary, Status, Images, Star, HandlePopup }) {
	return (
		<div className="fixed inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-4 rounded-lg shadow-lg m-4">
				<div onClick={HandlePopup} className="flex justify-end">
					<img className="w-4 text-right" src={X} />
				</div>
				<h1 className="text-2xl font-bold text-gray-800 uppercase">{Name}</h1>
				<div className="flex justify-center">
					{[...Array(Bust)].map((_, index) => (
						<img
							className="w-5"
							key={index}
							src={`${Star}`}
							alt={`Image ${index + 1}`}
						/>
					))}
				</div>
				<h2 className="text-lg font-semibold text-gray-700">Wanted</h2>
				<p className="text-gray-600 font-bold text-sm">Status: {Status}</p>

				<p className="text-gray-700 font-bold">{Summary}</p>
				<Link to=""></Link>
				<div
					style={{
						borderStyle: "dotted",
						borderWidth: "1px",
					}}
					className="w-full my-4"
				></div>
				<ImageSlider images={Images} />
			</div>
		</div>
	);
}

export default Popup;
