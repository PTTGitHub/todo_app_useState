import "./App.css";
import Header from "./header";
import Body from "./Body";
import { useState } from "react";

function App() {
	const [page, setPage] = useState("toDo");

	const handleClick = () => {
		if (page === "toDo") {
			setPage("toDone");
		}
		if (page === "toDone") {
			setPage("toDo");
		}
	};
	return (
		<div className="app">
			<Header page={page} handleClick={handleClick} />
			<Body page={page} />
		</div>
	);
}

export default App;
