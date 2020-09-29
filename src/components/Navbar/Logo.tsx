/** @format */

import React from "react";
import styled from "styled-components";

import NavbarSection from "./NavbarSection";

type LogoProps = { logo: string };

const Logo: React.FC<LogoProps> = ({ logo }) => {
	return (
		<NavbarSection>
			<ApplicationLogo src={logo} />
		</NavbarSection>
	);
};

export default Logo;

const ApplicationLogo = styled.img`
	width: 75px;
`;
