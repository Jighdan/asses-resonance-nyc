import React from "react";
import styled from "styled-components";
import Product from "./Product";

const CatalogSection = styled.section`
	padding: 3rem 8.5vw;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	gap: 0.5rem;
	user-select: none;
`;

const Catalog = ({ catalog }) => {
	return (
		<CatalogSection>
			{ catalog.map((product, index) => (
				<Product key={ index } product={ product } />
			)) }
		</CatalogSection>
	);
};

export default Catalog;