import { useState } from "react";
import menu from "../assets/menu_icon.png";
import { Link } from "react-router-dom";

export default function Nav() {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<div>
			<div
				className="dropdown"
				style={{
					display: "flex",
					justifyContent: "center",
				}}
			>
				<div onClick={toggleMenu} className="dropdown-toggle">
					<img src={menu} style={{ width: "30px" }}></img>
				</div>
				{isOpen && (
					<div
						className="dropdown-menu"
						style={{
							position: "absolute",
							textAlign: "center",
							width: "100%",
							top: "20%",
							left: "50%",
							transform: "translate(-50%, -50%)",
							zIndex: "1000",
						}}
					>
						<ul
							style={{
								color: "lightblue",
								backgroundColor: "#453823",
								listStyle: "none",
								padding: "10px 0px",
								fontSize: "25px",
							}}
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
									to="/queens"
									style={{ textDecoration: "none", color: "lightblue" }}
								>
									Queens
								</Link>
							</li>
						</ul>
					</div>
				)}
			</div>
		</div>
	);
}
