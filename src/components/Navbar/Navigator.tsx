/** @format */

import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import NavbarSection from "./NavbarSection";

const Navigator: React.FC = () => {
	const { pathname } = useLocation();
	return (
		<NavbarSection>
			<NavigatorDiv to={`/Home`} optionName={`/Home`} path={pathname}>
				HOME
			</NavigatorDiv>
			<NavigatorDiv to={`/Repertuar/teraz-gramy`} optionName={`/Repertuar`} path={pathname.slice(0, 10)}>
				REPERTUAR
			</NavigatorDiv>
		</NavbarSection>
	);
};

export default Navigator;

type NavigatorDivProp = { optionName: string; path: string };

const NavigatorDiv = styled(Link)<NavigatorDivProp>`
	margin: 5px;
	padding: 0px;
	box-sizing: border-box;
	text-decoration: none;
	font-size: 20px;
	color: ${(props) => (props.optionName === props.path ? props.theme.fontColors.fourth : props.theme.fontColors.main)};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;
