import React, { useEffect, useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import airtableBase from "../plugins/airtablePlugin";
import Catalog from "../components/Catalog";

const ProductsCatalog = ({ props }) => {
	const [productsCatalog, setProductsCatalog] = useState([]);

	const constructProductRecord = (record) => {
    return {
      name: record.get("Name"),
      picture: record.get("Picture"),
      description: record.get("Description"),
      vendor: record.get("vendor"),
      unitCost: record.get("Unit Cost"),
      inStock: record.get("In Stock"),
      size: record.get("Size (WxLxH)"),
      materials: record.get("Materials and Finishes")
    }
	};
	
	useEffect(() => {
		airtableBase("Furniture")
			.select({ view: "Main View", fields: ["Name", "Picture", "In Stock", "Unit Cost", "Description", "Vendor", "Designer"] })
			.eachPage((records, fetchNextPage) => {
				setProductsCatalog(records.map(record => constructProductRecord(record)))
				fetchNextPage();
			});
	}, []);

	return (
		<section>
			<Catalog catalog={ productsCatalog } />
		</section>
	);
};

export default ProductsCatalog;