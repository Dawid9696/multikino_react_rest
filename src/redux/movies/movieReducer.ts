/** @format */

import { MoviesActionsTypes } from "./movieTypes";

import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE } from "./movieTypes";

export type Seance = {
	_id: string;
	hour: string;
	dimension: string;
	dubbing: string;
};

export interface MovieProp {
	_id: string;
	age: number;
	city: string[];
	comments: any;
	description: string;
	direction: string;
	duration: number;
	genre: string;
	photo: string;
	released: boolean;
	seance: [Seance];
	title: string;
}

interface initialStateProp {
	loading: boolean;
	movies: MovieProp[];
	error: string;
}

const initialState = {
	loading: false,
	movies: [],
	error: "",
};

const movieReducer = (state: initialStateProp = initialState, action: MoviesActionsTypes) => {
	switch (action.type) {
		case FETCH_MOVIES_REQUEST:
			return {
				...state,
				loading: true,
			};
		case FETCH_MOVIES_SUCCESS:
			return {
				loading: false,
				movies: action.payload,
				error: "",
			};
		case FETCH_MOVIES_FAILURE:
			return {
				loading: false,
				movies: [],
				error: action.payload,
			};
		default:
			return state;
	}
};

export default movieReducer;
