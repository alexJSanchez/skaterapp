import { useState } from "react";
import menuWhite from "../assets/menuwhite.svg";
import menuGreen from "../assets/menugreen.svg";
import { Link } from "react-router-dom";
import gripTape from "../assets/griptape.jpg";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div className="dropdown">
				<div onClick={toggleMenu} className="dropdown-toggle">
					{isOpen ? (
						<img src={menuGreen} className="w-[70px]"></img>
					) : (
						<img src={menuWhite} className="w-[70px]"></img>
					)}
				</div>
				{isOpen && (
					<div className="absolute rounded-lg shadow-md p-4 z-[1000] text-center translate-x-[-50%] translate-y-[-50%] bg-white w-full top-[40%] left-[50%]">
						<ul
							style={{}}
							className="bg-[url('./assets/griptape.jpg')] no-underline text-[#ADD8E6] pt-3 gap-3 flex flex-col list-none text-[1.6rem]"
							onClick={() => setIsOpen(false)}
						>
							<li>
								<Link to="/bronx">Bronx</Link>
							</li>
							<li>
								<Link to="/brooklyn">Brooklyn</Link>
							</li>
							<li>
								<Link to="/financialDistrict">financialDistrict</Link>
							</li>
							<li>
								<Link to="/lowerEastSide">lowerEastSide</Link>
							</li>
							<li>
								<Link to="/midTown">midTown</Link>
							</li>
							<li>
								<Link to="/queens">Queens</Link>
							</li>
							<li>
								<Link to="/statenIsland">Stanten Island</Link>
							</li>
							<li>
								<Link to="/uptownHarlem">Uptown Harlem</Link>
							</li>
							<li>
								<Link to="/westVillageTribeca">West Village Tribeca</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
