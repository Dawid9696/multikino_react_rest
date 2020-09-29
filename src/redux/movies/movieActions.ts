/** @format */

import axios from "axios";
import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./movieTypes";
import { MovieProp } from "./movieReducer";
import { Dispatch } from "redux";

export const fetchMovies = (query: string) => {
	return (dispatch: Dispatch<any>) => {
		dispatch(fetchMoviesRequest());
		axios
			.get(`http://localhost:5000/Multikino/allMovies?released=${query}`)
			.then((response) => {
				const movies = response.data;
				dispatch(fetchMoviesSuccess(movies));
			})
			.catch((error) => {
				dispatch(fetchMoviesFailure(error.message));
			});
	};
};

export const fetchMoviesRequest = () => {
	return {
		type: FETCH_MOVIES_REQUEST,
	};
};

export const fetchMoviesSuccess = (movies: MovieProp) => {
	return {
		type: FETCH_MOVIES_SUCCESS,
		payload: movies,
	};
};

export const fetchMoviesFailure = (error: string) => {
	return {
		type: FETCH_MOVIES_FAILURE,
		payload: error,
	};
};
