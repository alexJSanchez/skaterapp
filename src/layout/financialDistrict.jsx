import { useEffect } from "react";
import { Link } from "react-router-dom";
import spots from "../Data";
import starIcon from "../assets/star_fill_icon.png";
import gripTape from "../assets/griptape.jpg";
import skateIcon from "../assets/skateboard-icon.png";
import ImageSlider from "../component/slider";
function FinancialDistrict() {
	useEffect(() => {}, []);
	if (!spots.FinancialDistrict) {
		return <div>Loading...</div>; // You can replace this with any loading indicator
	}
	return (
		<>
			<Link to="/">back home</Link>
			<div
				className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-center p-4 "
				style={{ backgroundImage: `url(${gripTape})` }}
			>
				{spots.FinancialDistrict.map((res, index) => (
					<div
						id={`${res.name.replace(/\s+/g, "")}`}
						key={index}
						className="flex flex-col items-center rounded-lg shadow-md p-4 bg-white "
					>
						<h1 className="text-2xl font-bold text-gray-800 uppercase">
							{res.name}
						</h1>
						<div className="flex justify-center">
							{[...Array(res.bust.level)].map((_, index) => (
								<img
									className="w-5"
									key={index}
									src={`${starIcon}`}
									alt={`Image ${index + 1}`}
								/>
							))}
						</div>
						<h2 className="text-lg font-semibold text-gray-700">Wanted</h2>
						<p className="text-gray-600 font-bold text-sm">
							Status: {res.bust.status}
						</p>
						<img src={skateIcon} />
						<p className=" text-gray-700 font-bold">{res.summary}</p>
						<a
							className="text-[1rem] font-bold bg-green-400 rounded-[50px] mt-[10px] py-[5px] px-[20px] "
							href={res.maps}
						>
							SkateHere
						</a>
						<div className="w-full my-4 border-dotted border-[1px]"></div>
						<ImageSlider images={res.images} />
					</div>
				))}
			</div>
		</>
	);
}

export default FinancialDistrict;
