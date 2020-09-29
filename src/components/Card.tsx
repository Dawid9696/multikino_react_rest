/** @format */

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieProps, Seance } from "./Repertuar/Repertuar";
import SeanceCard from "./SeanceCard";

type CardProps = { movie: MovieProps };

const Card: React.FC<CardProps> = ({ movie }) => {
	return (
		<AppCard>
			<Picture to={`/Movie/${movie._id}`} photo={movie.photo}></Picture>
			<Details>
				<Title to={`/Movie/${movie._id}`}>{movie.title}</Title>
				<Info>
					Od lat {movie.age} | {movie.genre} | {movie.duration} min
				</Info>
				<Description>{movie.description}</Description>
				<Seances>
					{movie.seance.map((seance: Seance, index: number) => (
						<SeanceCard key={index} seance={seance} />
					))}
				</Seances>
			</Details>
		</AppCard>
	);
};

export default Card;

const AppCard = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	width: 60vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	border-bottom: 1px solid grey;
	@media (max-width: 768px) {
		width: 90vw;
		flex-direction: column;
	}
`;

type PictureProp = { photo: string };

const Picture = styled(Link)<PictureProp>`
	margin: 10px;
	width: 12%;
	height: 200px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	background-position: center;
	background-size: contain;
	background-repeat: no-repeat;
	background-image: ${(props) => `url(${props.photo})`};

	@media (max-width: 768px) {
		margin: 20px;
		width: 80%;
		flex-direction: column;
	}
	:hover {
		cursor: pointer;
	}
`;

const Details = styled(AppCard)`
	margin: 10px;
	width: 80%;
	flex-direction: column;
	border: none;
`;

const Info = styled(AppCard)`
	margin: 10px;
	width: 100%;
	flex-direction: column;
	color: ${(props) => props.theme.fontColors.third};
	border: none;
	@media (max-width: 768px) {
		font-size: 14px;
	}
`;

const Description = styled(AppCard)`
	width: 100%;
	flex-direction: column;
	color: ${(props) => props.theme.fontColors.secondary};
	border: none;
	@media (max-width: 768px) {
		display: none;
	}
`;

const Seances = styled(AppCard)`
	margin: 10px;
	width: 100%;
	flex-direction: row;
	border: none;
`;

const Title = styled(Link)`
	padding: 0px;
	box-sizing: border-box;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 20px;
	margin: 10px;
	width: 100%;
	color: ${(props) => props.theme.fontColors.main};
	border: none;
	:hover {
		cursor: pointer;
	}
`;

const Ratio = styled(AppCard)`
	flex-direction: column;
	border: none;
`;
