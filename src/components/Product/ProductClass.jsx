import React, { Component } from "react";
import PropTypes from "prop-types";
import ButtonClass from "../Button/ButtonClass";
// import clsx from "clsx";
import css from "./Product.module.css";

class Product extends Component {
	// constructor(props) {

	// }
	// const productNameClassNames = clsx(css.productName, {
	// [css.inBasket]: inBasket,
	// });
	render() {
		const {
			id,
			imgUrl,
			name,
			price,
			leftInStock,
			addProductToBasket,
			isBasket,
		} = this.props;

		return (
			<li className={css.product}>
				<img src={imgUrl} alt={name} width="160" />
				<h2 className={"productNameClassNames"}>{name}</h2>
				<p>Price: {price}$</p>
				<p>
					{leftInStock > 0
						? `In stock: ${leftInStock}`
						: "Product not available..."}
				</p>

				{!isBasket && (
					<button onClick={() => addProductToBasket(id)}>Add to Basket</button>
				)}

				{/* <ButtonClass category="unpurchased" /> */}
			</li>
		);
	}
}

Product.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	leftInStock: PropTypes.number,
};

export default Product;
