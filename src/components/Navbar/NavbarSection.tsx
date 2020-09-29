/** @format */

import React from "react";
import styled from "styled-components";

type NavbarSectionProps = { children: React.ReactNode };

const NavbarSection: React.FC<NavbarSectionProps> = ({ children }) => {
	return <AppNavbarSection>{children}</AppNavbarSection>;
};

export default NavbarSection;

const AppNavbarSection = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 33%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
	@media (max-width: 768px) {
		width: 100vw;
	}
`;
