/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

//IMPORTED ICONS
import { BsFilterLeft } from "react-icons/bs";

const Filter: React.FC = () => {
	return (
		<AppFilter>
			<SeanceOptions>
				<Option to={"/Repertuar/teraz-gramy"}>TERAZ GRAMY</Option>
				<Option to={"/Repertuar/wkrótce"}>WKRÓTCE</Option>
			</SeanceOptions>
			<FilterTab>
				<BsFilterLeft color='grey' size='40px' />
			</FilterTab>
		</AppFilter>
	);
};

export default React.memo(Filter);

const AppFilter = styled.div`
	margin: 10px;
	padding: 0px;
	box-sizing: border-box;
	width: 75vw;
	min-height: 5vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	color: ${(props) => props.theme.fontColors.main};
	background-color: ${(props) => props.theme.backgroundColor};
	border-bottom: 1px solid grey;
	@media (max-width: 768px) {
		width: 90vw;
		flex-direction: column;
	}
`;

const SeanceOptions = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	color: ${(props) => props.theme.fontColors.main};
	background-color: ${(props) => props.theme.backgroundColor};
	@media (max-width: 768px) {
		width: 100%;
		flex-direction: column;
	}
`;

const Option = styled(Link)`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	font-size: 20px;
	font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
	font-weight: 600;
	text-decoration: none;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	color: ${(props) => props.theme.fontColors.main};
	background-color: ${(props) => props.theme.backgroundColor};
	@media (max-width: 768px) {
		margin: 10px;
		width: 100%;
	}
`;

const FilterTab = styled.div`
	margin: 10px;
	padding: 0px;
	box-sizing: border-box;
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	color: ${(props) => props.theme.fontColors.main};
	background-color: ${(props) => props.theme.backgroundColor};
`;
