import { useState } from "react";
import "./App.css";
import Product from "./components/Product";
import { nanoid } from "nanoid";

const PRODUCTS_DATA = [
	{ id: nanoid(), name: "Water", price: 5, leftInStock: 0, imgUrl: "" },
	{ id: nanoid(), name: "Food", price: 10, leftInStock: 250, imgUrl: "" },
	{ id: nanoid(), name: "T-shirt", price: 15, leftInStock: 50, imgUrl: "" },
	{ id: nanoid(), name: "T-shirt", price: 15, leftInStock: 50, imgUrl: "" },
];

function App() {
	// INPUT: dane (any) [wartosc startowa]
	// OUTPUT: Array (Tuple) [dane, funkcje_do_updateu_danych]
	// useState to REACT HOOK
	const [products, setProducts] = useState(PRODUCTS_DATA);

	const addProduct = () => {
		const newProduct = {
			id: nanoid(),
			name: "Whatever",
			price: 5,
			leftInStock: 0,
			imgUrl: "",
		};

		setProducts((state) => [...state, newProduct]);
	};

	return (
		<>
			<h1>App</h1>

			{/* <p>{true && "&& true"}</p>
			<p>{false && "&& false"}</p>
			<p>{true || "|| true"}</p>
			<p>{false || "|| false"}</p> */}

			<ul>
				{products.map((p) => (
					<Product key={p.id} {...p} />
				))}
			</ul>

			<button onClick={addProduct}>Add Product</button>
		</>
	);
}

export default App;
