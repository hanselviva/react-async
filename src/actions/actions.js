import axios from "axios";

export const FETCHING_JOKE = "FETCHING_JOKE";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAILED = "FETCHING_FAILED";

export const getRandomJoke = () => {
	return (dispatch) => {
		dispatch({ type: FETCHING_JOKE });

		axios
			.get("http://api.icndb.com/jokes/random")
			.then((res) => {
				dispatch({ type: FETCHING_SUCCESS, payload: res.data.value.joke });
			})
			.catch((err) => {
				dispatch({ type: FETCHING_FAILED, payload: JSON.stringify(err) });
			});
	};
};
