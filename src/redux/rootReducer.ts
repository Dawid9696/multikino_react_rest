/** @format */

import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import movieReducer from "./movies/movieReducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

const rootReducer = combineReducers({
	movies: movieReducer,
});

export default persistReducer(persistConfig, rootReducer);
