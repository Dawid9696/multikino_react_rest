/** @format */

import { createSelector } from "reselect";

const selectMovie = (state: any) => state.movies;

export const selectNowMovies = createSelector(selectMovie, (movie: any) => {
	return movie.movies;
});
