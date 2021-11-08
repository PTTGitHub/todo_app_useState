import React from "react";

const Header = (props) => {
	const { page, handleClick } = props;

	let hdText = "things To do";
	let pageBtnText = "Go To Done";
	if (page === "toDo") {
		hdText = "To do";
		pageBtnText = "to Done";
	} else {
		hdText = "Done";
		pageBtnText = "to To Do";
	}

	return (
		<>
			<h1 className="header">{hdText}</h1>
			<div className={page === "toDo" ? "toggle-todo" : "toggle-done"}>
				<button onClick={handleClick}>{pageBtnText}</button>
			</div>
		</>
	);
};

export default Header;
