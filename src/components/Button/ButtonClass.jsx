// import React, { Component } from "react";

// class MyClassComponent extends Component {
//   static defaultProps = {};

//   static propTypes = {};

//   render() {
//     return <div>Class Component</div>;
//   }
// }

import PropTypes from "prop-types";
import React, { Component } from "react";
import css from "./Button.module.css";

class ButtonClass extends Component {
	// static propTypes = {};

	static defaultProps = { category: "unpurchased", isAddedToCart: false };

	constructor(props) {
		super(props);

		// MODEL (STATE)
		this.state = {
			btnTitle: "(CLASS) Add to cart",
		};
	}

	initClassNames = (css, category) => {
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

	// VIEW (UI)
	render() {
		const { category, toggleIsAddedToCart, isAddedToCart } = this.props;
		const { btnTitle } = this.state;

		return (
			<button
				type="button"
				onClick={toggleIsAddedToCart}
				className={this.initClassNames(css, category)}
			>
				{btnTitle} {isAddedToCart && "(is in cart)"}
			</button>
		);
	}
}

export default ButtonClass;
