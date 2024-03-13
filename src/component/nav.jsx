import { useState } from "react";
import menu from "../assets/menuwhite.svg";
import { Link } from "react-router-dom";
import gripTape from "../assets/griptape.jpg";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div className="dropdown" style={{}}>
				<div onClick={toggleMenu} className="dropdown-toggle">
					<img src={menu} style={{ width: "70px" }}></img>
				</div>
				{isOpen && (
					<div
						className="dropdown-menu rounded-lg shadow-md p-4 bg-white"
						style={{
							position: "absolute",
							textAlign: "center",
							width: "100%",
							top: "40%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							zIndex: "1000",
						}}
					>
						<ul
							style={{
								color: "lightblue",
								listStyle: "none",
								padding: "10px 0px",
								fontSize: "25px",
								display: "flex",
								flexDirection: "column",
								gap: "10px",
							}}
							className="bg-[url('./assets/griptape.jpg')]"
							onClick={() => setIsOpen(false)}
						>
							<li>
								<Link
									to="/bronx"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Bronx
								</Link>
							</li>
							<li>
								<Link
									to="/brooklyn"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Brooklyn
								</Link>
							</li>
							<li>
								<Link
									to="/financialDistrict"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									financialDistrict
								</Link>
							</li>
							<li>
								<Link
									to="/lowerEastSide"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									lowerEastSide
								</Link>
							</li>
							<li>
								<Link
									to="/midTown"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									midTown
								</Link>
							</li>
							<li>
								<Link
									to="/queens"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Queens
								</Link>
							</li>
							<li>
								<Link
									to="/statenIsland"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Stanten Island
								</Link>
							</li>
							<li>
								<Link
									to="/uptownHarlem"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Uptown Harlem
								</Link>
							</li>
							<li>
								<Link
									to="/westVillageTribeca"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									West Village Tribeca
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
