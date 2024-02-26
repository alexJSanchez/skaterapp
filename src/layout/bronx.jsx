import { useEffect } from "react";
import spots from "../Data";
import starIcon from "../assets/star_fill_icon.png";
function Bronx() {
	useEffect(() => {
		console.log("initial render:", spots.Bronx[0]);
	}, []);
	if (!spots.Bronx) {
		return <div>Loading...</div>; // You can replace this with any loading indicator
	}
	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 text-center p-4">
			{spots.Bronx.map((res, index) => (
				<div key={index} className="bg-white rounded-lg shadow-md p-4">
					<h1 className="text-2xl font-bold text-gray-800">{res.name}</h1>
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
					<p className="text-gray-600">Status: {res.bust.status}</p>
					<p className="mt-2 text-gray-700">{res.summary}</p>
					<img src={res.images[0]} />
				</div>
			))}
		</div>
	);
}

export default Bronx;
