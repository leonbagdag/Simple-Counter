//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

function SimpleCounter(props) {
	return (
		<div className="counter">
			<div className="hora">0</div>
			<div className="minuto">0</div>
			<div className="segundo">0</div>
			<div className="mil">0</div>
		</div>
	);
}

//render your react application
ReactDOM.render(<SimpleCounter />, document.querySelector("#app"));
