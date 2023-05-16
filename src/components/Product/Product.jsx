import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import clsx from "clsx";
import css from "./Product.module.css";

const Product = ({
	imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
	name,
	price,
	leftInStock = 0,
}) => {
	const productNameClassNames = clsx(css.productName, {
		// [css.inBasket]: inBasket,
	});

	return (
		<li className={css.product}>
			<img src={imgUrl} alt={name} width="640" />
			<h2 className={productNameClassNames}>{name}</h2>
			<p>Price: {price}$</p>
			<p>
				{leftInStock > 0
					? `In stock: ${leftInStock}`
					: "Product not available..."}
			</p>
			<Button category="unpurchased" />
		</li>
	);
};

Product.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	leftInStock: PropTypes.number,
	// inBasket: PropTypes.bool.isRequired,
};

export default Product;
