/** @format */

import React from "react";
import useSWR from "swr";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MovieProps, Seance } from "../Repertuar/Repertuar";
import SeanceCard from "../SeanceCard";

function DetailPage({}) {
	const { id } = useParams();
	const { data, error } = useSWR(`http://localhost:5000/Multikino/Movie/${id}`);
	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;

	console.log(data);
	return (
		<AppDetailPage>
			<Video></Video>
			<MovieDescription>
				<Title to={`/Movie/${data._id}`}>{data.title}</Title>
				<Info>
					Od lat {data.age} | {data.genre} | {data.duration} min
				</Info>
				<Description>{data.description}</Description>
				<Seances>
					{data.seance.map((seance: Seance, index: number) => (
						<SeanceCard key={index} seance={seance} />
					))}
				</Seances>
				<Additional>
					<AdditionalDiv>
						<Photo photo={data.photo}></Photo>
					</AdditionalDiv>
					<AdditionalDiv>
						<Header>Czas trwania</Header>
						<Text>{data.duration}</Text>
					</AdditionalDiv>
					<AdditionalDiv>
						<Header>Reżyseria</Header>
						<Text>{data.direction}</Text>
					</AdditionalDiv>
				</Additional>
			</MovieDescription>
		</AppDetailPage>
	);
}

export default DetailPage;

const AppDetailPage = styled.div`
	margin: 0px;
	padding: 10px;
	box-sizing: border-box;
	width: 100vw;
	min-height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const Video = styled.div`
	margin: 0px;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	min-height: 100vh;

	@media (max-width: 768px) {
		width: 100%;
		min-height: 50vh;
	}
`;

const MovieDescription = styled.div`
	position: relative;
	margin: 0px;
	padding: 10px;
	box-sizing: border-box;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	flex-direction: column;
	width: 30%;
	min-height: 100vh;

	@media (max-width: 768px) {
		width: 100vw;
		position: relative;
	}
`;

const Info = styled.div`
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	justify-content: left;
	align-items: center;
	margin: 20px;
	width: 90%;
	text-align: left;
	color: ${(props) => props.theme.fontColors.third};
	@media (max-width: 768px) {
		width: 100vw;
		justify-content: center;
		text-align: center;
		font-size: 14px;
	}
`;

const Description = styled.div`
	margin: 20px;
	width: 90%;
	flex-direction: column;
	color: ${(props) => props.theme.fontColors.secondary};

	@media (max-width: 768px) {
		display: none;
	}
`;

const Seances = styled.div`
	margin: 10px;
	width: 80%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	border: none;
	@media (max-width: 768px) {
		width: 100vw;
	}
`;

const Title = styled(Link)`
	padding: 0px;
	box-sizing: border-box;
	text-decoration: none;
	display: flex;
	justify-content: left;
	align-items: center;
	font-size: 20px;
	margin: 10px;
	font-size: 30px;
	margin-top: 30px;
	width: 90%;
	color: ${(props) => props.theme.fontColors.main};
	border: none;
	@media (max-width: 768px) {
		width: 100vw;
		justify-content: center;
		text-align: center;
	}
	:hover {
		cursor: pointer;
	}
`;

const Additional = styled.div`
	position: absolute;
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	display: flex;
	left: -180px;
	align-items: center;
	flex-direction: column;

	@media (max-width: 768px) {
		width: 100vw;
		position: initial;
	}
`;

const AdditionalDiv = styled.div`
	margin: 0px;
	margin-top: 10px;
	padding: 0px;
	width: 100%;
	box-sizing: border-box;
	display: flex;
	justify-content: right;
	flex-direction: column;
	align-items: center;
`;

type PictureProp = { photo: string };

const Photo = styled.div<PictureProp>`
	margin: 0px;
	width: 175px;
	height: 250px;

	justify-self: flex-end;
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

const Header = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	font-size: 18px;
	color: ${(props) => props.theme.fontColors.main};
	display: flex;
	justify-content: right;
	align-items: center;
	width: 100%;
	@media (max-width: 768px) {
		width: 100vw;
		justify-content: center;
	}
`;

const Text = styled.div`
	margin: 0px;
	padding: 0px;
	box-sizing: border-box;
	font-size: 14px;
	color: ${(props) => props.theme.fontColors.third};
	display: flex;
	justify-content: right;
	align-items: center;
	width: 100%;
	@media (max-width: 768px) {
		width: 100vw;
		justify-content: center;
	}
`;
