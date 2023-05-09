import React from "react";
import PropTypes from "prop-types";

const Button = ({ category = "unpurchased" }) => {
	let btnClass = "";
	if (category === "error") {
		btnClass = "red";
	}
	if (category === "unpurchased") {
		btnClass = "blue";
	}
	if (category === "purchased") {
		btnClass = "green";
	}

	return (
		<button type="button" className={btnClass}>
			Add to cart
		</button>
	);
};

Button.propTypes = {
	category: PropTypes.string,
};

export default Button;
