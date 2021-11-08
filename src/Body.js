import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function Body(props) {
	const [toDoItems, setToDoItems] = useState([]);
	const [doneItems, setDoneItems] = useState([]);
	const [valueAdd, setValueAdd] = useState("");
	const { page } = props;
	// Add button ------------------------------
	const handleAdd = () => {
		if (valueAdd) {
			const key = uuidv4();
			setToDoItems([...toDoItems, { id: key, title: valueAdd }]);
			setValueAdd("");
		}
	};
	// CHECK button -------------------------------
	const handleCheck = (key, title) => {
		setDoneItems([...doneItems, { id: key, title: title }]);
		const newToDoItems = toDoItems.filter((item) => {
			return item.id !== key;
		});
		setToDoItems(newToDoItems);
	};
	const handleRemoveToDo = (key) => {
		const newToDoItems = toDoItems.filter((item) => {
			return item.id !== key;
		});
		setToDoItems(newToDoItems);
	};
	const handleRemoveDone = (key) => {
		const newDoneItems = doneItems.filter((item) => item.id !== key);
		setDoneItems(newDoneItems);
	};
	// Main -----------------------------------------
	if (page === "toDo") {
		return (
			<div className="bodyContainer">
				<div className="displayItems">
					<ul>
						{toDoItems.map((item) => {
							return (
								<li key={item.id}>
									<span
										className="removeIcon"
										onClick={() => handleRemoveToDo(item.id)}
									>
										-
									</span>
									<span className="main-span-item">{item.title}</span>
									<button
										className="checkBtn"
										onClick={() => {
											return handleCheck(item.id, item.title);
										}}
									>
										CHECK
									</button>
								</li>
							);
						})}
					</ul>
				</div>
				<div className="addItems">
					<span onClick={handleAdd}>+</span>
					<input
						type="text"
						onChange={(event) => setValueAdd(event.target.value)}
						placeholder=" add more item here"
						value={valueAdd}
					/>
				</div>
			</div>
		);
	} else {
		return (
			<>
				<div className="bodyContainer-done">
					<div className="displayDoneItems">
						<ul>
							{doneItems.map((item) => {
								return (
									<li key={item.id}>
										<span
											className="removeIcon"
											onClick={() => handleRemoveDone(item.id)}
										>
											-
										</span>
										<span className="main-span-item">{item.title}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</>
		);
	}
}
