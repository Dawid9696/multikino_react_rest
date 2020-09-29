/** @format */

import React from "react";
import styled from "styled-components";

//IMPORTED COMPOENTS
import Navbar from "./Navbar/Navbar";

type LayoutProps = { children: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<AppLayout>
			<Navbar />
			{children}
		</AppLayout>
	);
};

export default Layout;

const AppLayout = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	color: ${(props) => props.theme.fontColors.main};
	background-color: ${(props) => props.theme.backgroundColor};
`;
