import React, { useState } from "react";
import Alarm from "../../audio/alarm.mp3";

const playSound = () => {
	const audio = new Audio(Alarm);
	audio.play();
};

const Tasbih = () => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount((prevCount) => {
			const newCount = prevCount + 1;
			if (newCount % 33 === 0 && newCount != 0) {
				playSound();
			}
			return newCount % 100;
		});
	};

	const resetCount = () => {
		setCount(0);
	};

	return (
		<div style={styles.container}>
			<div style={styles.display}>
				<h1>{count}</h1>
			</div>
			<button style={styles.button} onClick={incrementCount}>
				Count
			</button>
			<button style={styles.button} onClick={resetCount}>
				Reset
			</button>
		</div>
	);
};

const styles = {
	container: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "center",
		height: "100vh",
		backgroundColor: "#f0f0f0",
	},
	display: {
		marginBottom: "20px",
	},
	button: {
		padding: "10px 20px",
		margin: "5px",
		fontSize: "16px",
		cursor: "pointer",
	},
};

export default Tasbih;
