/** @format */

import React from "react";
import styled from "styled-components";
import { Seance } from "./Repertuar/Repertuar";

type SeanceProp = { seance: Seance };

const SeanceCard: React.FC<SeanceProp> = ({ seance }) => {
	return (
		<AppSeance>
			<Hour>{seance.hour}</Hour>
			<SeanceInfo>
				{seance.dimension}, {seance.dubbing}
			</SeanceInfo>
		</AppSeance>
	);
};

export default SeanceCard;

const AppSeance = styled.div`
	margin: 10px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	border: ${(props) => `2px solid ${props.theme.fontColors.fourth}`};
	transition: 0.25s;
	:hover {
		cursor: pointer;
		background-color: ${(props) => props.theme.fontColors.fourth};
		transition: 0.25s;
	}
`;

const Hour = styled(AppSeance)`
	margin: 6px;
	color: ${(props) => props.theme.fontColors.main};
	font-size: 20px;
	border: none;
`;

const SeanceInfo = styled(AppSeance)`
	margin: 6px;
	color: ${(props) => props.theme.fontColors.main};
	font-size: 15px;
	border: none;
`;
