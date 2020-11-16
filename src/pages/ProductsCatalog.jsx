import React, { useEffect, useState } from "react";
import { airtableCatalog } from "../plugins/airtablePlugin";

import Panel from "../components/Panel";
import Catalog from "../components/Catalog";

const ProductsCatalog = () => {
	const [productsCatalog, setProductsCatalog] = useState([]);

	useEffect(() => {
		airtableCatalog().then(response => {
			setProductsCatalog(response);
		});
	}, []);

	return (
		<section>
			<Panel user={ "Jaime" } />
			<Catalog catalog={ productsCatalog } />
		</section>
	);
};

export default ProductsCatalog;