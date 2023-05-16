import { Component } from "react";
import "./App.css";
import ProductClass from "./components/Product/ProductClass";
import { nanoid } from "nanoid";
import ButtonClass from "./components/Button/ButtonClass";

import PRODUCTS_DATA from "./data/products.json";

class App extends Component {
	constructor(props) {
		super(props);

		// MODEL (STATE)
		this.state = {
			isAddedToCart: false,
			products: PRODUCTS_DATA, // Array of Product{}
			basket: [], // Array of Ids (Strings)
		};
	}

	addProduct = (_e) => {
		const newProduct = {
			id: nanoid(),
			name: "Whatever",
			price: 5,
			leftInStock: 0,
			imgUrl: "",
		};

		this.setState(({ products }, _props) => ({
			products: [...products, newProduct],
		}));
	};

	toggleIsAddedToCart = (_e) => {
		this.setState(({ isAddedToCart }, _props) => ({
			isAddedToCart: !isAddedToCart,
		}));
	};

	addProductToBasket = (id) => {
		console.log(id);
		console.log(this.state.basket);
		this.setState(({ basket }) => ({ basket: [...basket, id] }));
	};

	render() {
		const { products, basket, isAddedToCart } = this.state;

		return (
			<>
				{/* <ButtonClass
					isAddedToCart={isAddedToCart}
					toggleIsAddedToCart={this.toggleIsAddedToCart}
				/> */}

				<h1>App</h1>

				<h3>Products</h3>
				<button onClick={this.addProduct}>Add Product</button>
				<ul>
					{products.map((p) => (
						<ProductClass
							key={p.id}
							{...p}
							isBasket={false}
							addProductToBasket={this.addProductToBasket}
						/>
					))}
				</ul>
				<h3>Basket</h3>
				<ul>
					{products
						.filter((p) => basket.includes(p.id))
						.map((p) => (
							<ProductClass
								key={p.id}
								{...p}
								isBasket={true}
								addProductToBasket={this.addProductToBasket}
							/>
						))}
					{/* {basket.map((id) => (
						<li key={id}>{id}</li>
					))} */}
				</ul>
			</>
		);
	}
}

export default App;
