import React from "react";
import PropTypes from "prop-types";
import css from "./Button.module.css";

const Button = ({ category = "unpurchased" }) => {
	// PURE FUNCTION
	// INPUT: object(key: string), string
	// OUTPUT: string
	const initClassNames = (css, category) => {
		let btnClass = "";

		if (category === "error") {
			btnClass = css.btnRed;
		}
		if (category === "unpurchased") {
			btnClass = css.btnBlue;
		}
		if (category === "purchased") {
			btnClass = css.btnGreen;
		}

		return `${css.btn} ${btnClass}`;
	};

	return (
		<button type="button" className={initClassNames(css, category)}>
			Add to cart
		</button>
	);
};

Button.propTypes = {
	category: PropTypes.string,
};

export default Button;
