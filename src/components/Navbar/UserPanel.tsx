/** @format */

import React from "react";
import styled from "styled-components";

import NavbarSection from "./NavbarSection";
import { BsSearch } from "react-icons/bs";

const UserPanel: React.FC = () => {
	return (
		<NavbarSection>
			<NavACC>KONTO</NavACC>
			<NavDiv>
				<BsSearch size='30px' color='grey' />
			</NavDiv>
		</NavbarSection>
	);
};

export default UserPanel;

const NavACC = styled.div`
	margin: 10px;
	padding: 10px;
	box-sizing: border-box;
	font-weight: 600;
	width: 25%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: ${(props) => `2px solid ${props.theme.fontColors.fourth}`};
	@media (max-width: 768px) {
		width: 50vw;
		height: 10vh;
	}
`;

const NavDiv = styled.div`
	margin: 5px;
	padding: 0px;
	box-sizing: border-box;
	width: 25%;
	height: 4vh;
	display: flex;
	justify-content: center;
	align-items: center;

	@media (max-width: 768px) {
		width: 50vw;
		height: 10vh;
		/* flex-direction: column; */
	}
`;
