import React from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const Product = ({
	imgUrl = "https://dummyimage.com/640x480/2a2a2a/ffffff&text=Product+image+placeholder",
	name,
	price,
	leftInStock = 0,
}) => (
	<li className="card">
		<img src={imgUrl} alt={name} width="640" />
		<h2>{name}</h2>
		<p>Price: {price}$</p>
		<p>
			{leftInStock > 0
				? `In stock: ${leftInStock}`
				: "Product not available..."}
		</p>
		<Button category="unpurchased" />
	</li>
);

Product.propTypes = {
	imgUrl: PropTypes.string,
	name: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	leftInStock: PropTypes.number,
};

export default Product;
