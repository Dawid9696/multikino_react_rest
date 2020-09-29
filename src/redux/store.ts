/** @format */

import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { persistStore } from "redux-persist";
import { MoviesActionsTypes } from "./movies/movieTypes";

import rootReducer from "./rootReducer";

export type AppState = ReturnType<typeof rootReducer>;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk as ThunkMiddleware<AppState, MoviesActionsTypes>)));
const persistor = persistStore(store);
export default { store, persistor };
