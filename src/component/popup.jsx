import Xicon from "../assets/X.png";
import ImageSlider from "./slider.jsx";
import PropTypes from "prop-types";

function Popup({
	Name,
	Bust,
	Summary,
	Status,
	Images,
	Star,
	HandlePopup,
	Maps,
}) {
	return (
		<div className="absolute top-0 left-0 right-0 bottom-0 h-fit flex justify-center text-center bg-black bg-opacity-50 z-50">
			<div className="bg-white p-4 rounded-lg shadow-lg my-4 md:mx-40 ">
				<div onClick={HandlePopup} className="flex justify-end">
					<img className="w-4 text-right" src={Xicon} />
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
				<p className="text-gray-600 font-bold text-sm mb-2">
					<span className="text-red-600">Status:</span> {Status}
				</p>
				<p className="text-gray-700 font-bold mb-4">
					<span className="text-red-600">Obstacles: </span>
					{Summary}
				</p>
				<a
					href={Maps}
					className="text-[1rem] font-bold bg-green-400 rounded-[50px] mt-[10px] py-[5px] px-[20px] text-blue-900"
				>
					Skate Here
				</a>
				<div className="w-full my-4 border-dotted border-[1px]"></div>
				<ImageSlider images={Images} />
			</div>
		</div>
	);
}
Popup.propTypes = {
	Name: PropTypes.string.isRequired,
	Bust: PropTypes.number.isRequired,
	Summary: PropTypes.string.isRequired,
	Status: PropTypes.string.isRequired,
	Images: PropTypes.objectOf(PropTypes.string).isRequired,
	Star: PropTypes.string.isRequired,
	HandlePopup: PropTypes.func.isRequired,
	Maps: PropTypes.string,
};

export default Popup;
