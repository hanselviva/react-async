import React, { useEffect } from "react";
import "./components.css";
import { connect } from "react-redux";
import Spinner from "./spinner.svg";

import { getRandomJoke } from "../actions/actions";

const Jokes = ({ joke, fetching, error, getRandomJoke }) => {
	useEffect(() => {
		getRandomJoke();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	if (error) {
		return (
			<div className="error-wrapper">
				Ops! Chuck Norris killed the connection.
			</div>
		);
	}
	if (fetching) {
		return (
			<div className="fetching-wrapper">
				<img src={Spinner} alt="fetching" />
			</div>
		);
	}
	return (
		<div className="joke-wrapper">
			<div>{joke}</div>
			<button
				onClick={() => {
					getRandomJoke();
				}}
			>
				💊 gimme the pill 💊
			</button>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		joke: state.joke,
		fetching: state.fetching,
		error: state.error,
	};
};

export default connect(mapStateToProps, { getRandomJoke })(Jokes);
