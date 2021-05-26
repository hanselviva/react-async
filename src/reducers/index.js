import {
	FETCHING_JOKE,
	FETCHING_SUCCESS,
	FETCHING_FAILED,
} from "../actions/actions";

const initialState = {
	fetching: false,
	joke: "",
	error: "",
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCHING_JOKE:
			return {
				...state,
				fetching: true,
			};
		case FETCHING_SUCCESS:
			return {
				...state,
				fetching: false,
				joke: action.payload,
			};
		case FETCHING_FAILED:
			return {
				...state,
				fetching: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
