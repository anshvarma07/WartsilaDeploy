import React, { useState } from "react";
import "./Search.css"
import initialData from "./data.json"
import Cards from "./Cards";
import { BsCart2 } from 'react-icons/bs';
// import Cart from "./Cart";
import Cart from "./Cart.js"

export default function Search() {
	const [data, setData] = useState(initialData);
	const [searchTerm, setSearchTerm] = useState('');
	const [cartBool, setCartBool] = useState("0");


	const handleSearch = (e) => {
		const value = e.target.value;
		setSearchTerm(value);

		const data = initialData.filter((item) => (
			item["Port Name"]?.toLowerCase().includes(value.toLowerCase()) || item["Country"]?.toLowerCase().includes(value.toLowerCase())
		));
		setData(data);
	};
	return (
		<div>
			<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
				<div class="container-fluid">
					<a class="navbar-brand" href="https://www.wartsila.com/">Wartsila</a>
					<div className="fle">
						<div class="Search-Div" id="navbarSupportedContent">
							<form class="d-flex " role="search">
								<input type="text" class="inp form-control me-2 text-center" value={searchTerm} onChange={handleSearch} placeholder="Search for Ports" aria-label="Search" />
							</form>
						</div>
						<div>
							<div className="cart" onClick={() => { setCartBool(!cartBool) }}>
								<Cart bool={cartBool} />
								<BsCart2 />
								<div class="circle"></div>
								<span className="qty">1</span>
							</div>
						</div>
					</div>
				</div>
			</nav>
			<Cards FinalData={data}></Cards>



		</div>
	);
}


