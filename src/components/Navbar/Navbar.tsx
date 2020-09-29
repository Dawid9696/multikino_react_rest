/** @format */

import React from "react";
import styled from "styled-components";

//IMPORTED COMPONENTS
import Logo from "./Logo";
import UserPanel from "./UserPanel";
import Navigator from "./Navigator";

function Navbar() {
	const navOptions = ["Home", "Repertuar"];
	return (
		<AppNavbar>
			<Logo logo='https://newyork.cbslocal.com/wp-content/uploads/sites/14578484/2020/04/newyorklibertySQ.jpg?w=300' />
			<Navigator />
			<UserPanel />
		</AppNavbar>
	);
}

export default Navbar;

const AppNavbar = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	color: ${(props) => props.theme.fontColors.main};
	width: 100vw;
	min-height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-color: black;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;
