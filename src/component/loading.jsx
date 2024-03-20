import kickflipSamich from "../assets/kickflipSamich.png";
function Loading() {
	return (
		<div className="flex justify-center items-center h-screen bg-griptape">
			<div className="flex justify-center items-center  bg-full bg-center relative">
				<div
					className={`rounded-full flex flex-col justify-center items-center w-[24rem] h-[24rem] rotate-scale-down`}
				>
					<img
						src={kickflipSamich}
						alt="kickflip sandwich"
						className="w-[24rem] h-[24rem]"
					/>
					<p className="text-[5rem] transform -rotate-12 translate-x-8">
						LOADING
					</p>
				</div>
			</div>
		</div>
	);
}

export default Loading;
