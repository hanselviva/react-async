import "./App.css";
import Jokes from "./components/Jokes";
import ChuckNorris from "./components/chucknorris.png";

function App() {
	return (
		<div className="App">
			<h1>
				<img src={ChuckNorris} alt="chuckNorris" /> Your daily dose of Chuck
				Norris
			</h1>
			<Jokes />
		</div>
	);
}

export default App;
