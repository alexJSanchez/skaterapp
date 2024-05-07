import { useState } from "react";
import menuWhite from "../assets/menuwhite.svg";
import menuGreen from "../assets/menugreen.svg";
import { Link } from "react-router-dom";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div className="dropdown">
				<div onClick={toggleMenu} className="dropdown-toggle ">
					{isOpen ? (
						<img
							className="w-full max-w-16"
							src={menuGreen}
							alt="menu bar green "
						/>
					) : (
						<img
							className="w-full max-w-16"
							src={menuWhite}
							alt="menu bar white "
						/>
					)}
				</div>
				{isOpen && (
					<div className="absolute rounded-lg shadow-md p-4 z-50 text-center translate-x-[-50%] translate-y-[-45%] bg-white w-full top-[40%] left-[50%]">
						<ul
							className=" bg-black no-underline text-lightblue pt-3 pb-3 gap-3 flex flex-col list-none text-[1.6rem]"
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
