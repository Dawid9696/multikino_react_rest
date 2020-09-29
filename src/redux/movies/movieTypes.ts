/** @format */
import { MovieProp } from "./movieReducer";
export const FETCH_MOVIES_REQUEST = "FETCH_MOVIES_REQUEST";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_FAILURE = "FETCH_MOVIES_FAILURE";

export interface FetchMoviesRequest {
	type: typeof FETCH_MOVIES_REQUEST;
}

export interface FetchMoviesSuccess {
	type: typeof FETCH_MOVIES_SUCCESS;
	payload: [MovieProp];
}

export interface FetchMoviesFailure {
	type: typeof FETCH_MOVIES_FAILURE;
	payload: string;
}

export type MoviesActionsTypes = FetchMoviesRequest | FetchMoviesSuccess | FetchMoviesFailure;
