import { combineReducers } from "redux";
import movieReducer from "./actions/movies/movieReducer";

const rootReducer = combineReducers({movies: movieReducer});

export default rootReducer;