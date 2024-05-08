import { useState } from "react";

// Image object where the key is the index and the value is the image location
// const images = {
// 	0: "image1.jpg",
// 	1: "image2.jpg",
// 	2: "image3.jpg",
// Add more images as needed
// };

function ImageSlider({ images }) {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const goToPreviousImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === 0 ? Object.keys(images).length - 1 : prevIndex - 1
		);
	};

	const goToNextImage = () => {
		setCurrentImageIndex((prevIndex) =>
			prevIndex === Object.keys(images).length - 1 ? 0 : prevIndex + 1
		);
	};

	return (
		<div className="relative w-fits h-fit object-cover flex align-bottom">
			<button
				className="absolute inset-y-0 left-0 opacity-40 hover:opacity-90 flex items-center justify-center w-12 bg-gray-800 bg-opacity-70 text-white"
				onClick={goToPreviousImage}
			>
				&lt;
			</button>
			<button
				className="absolute inset-y-0 right-0 opacity-40 hover:opacity-90 flex items-center justify-center w-12 bg-gray-800 bg-opacity-70 text-white"
				onClick={goToNextImage}
			>
				&gt;
			</button>
			<img
				src={images[currentImageIndex]}
				alt={`Image ${currentImageIndex + 1}`}
				className="w-full h-full"
			/>
		</div>
	);
}

export default ImageSlider;
