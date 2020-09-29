/** @format */

import React, { useEffect } from "react";
import styled from "styled-components";
import * as H from "history";
//REDUX
import { useSelector, useDispatch } from "react-redux";
import { selectNowMovies } from "../../redux/movies/moviesSelectors";
import { fetchMovies } from "../../redux/movies/movieActions";

import Card from "../Card";
import Filter from "./Filter";

export type Seance = {
	_id: string;
	hour: string;
	dimension: string;
	dubbing: string;
};

export interface MovieProps {
	_id: string;
	age: number;
	city: string[];
	description: string;
	duration: number;
	genre: string;
	photo: string;
	seance: [Seance];
	title: string;
}

export interface RouteComponentProps<P> {
	match: match<P>;
	location: H.Location;
	history: H.History;
	staticContext?: any;
}

export interface match<P> {
	params: P;
	isExact: boolean;
	path: string;
	url: string;
}

type TParams = { option: string };

function Repertuar({ match }: RouteComponentProps<TParams>) {
	const { option } = match.params;
	const movies = useSelector(selectNowMovies);
	const dispatch: any = useDispatch();
	useEffect(() => {
		dispatch(fetchMovies(option));
	}, [dispatch, option]);

	return (
		<React.Fragment>
			<Filter />
			<AppRepertuar>{movies.length > 0 && movies.map((movie: MovieProps, index: string) => <Card key={index} movie={movie} />)}</AppRepertuar>
		</React.Fragment>
	);
}

export default Repertuar;

const AppRepertuar = styled.div`
	margin: 20px;
	width: 75vw;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;
