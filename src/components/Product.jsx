import React, { useState } from "react";
import styled from "styled-components";

const ProductSection = styled.section`
	padding: 1rem 3rem;
	display: grid;
	gird-template-rows: auto 2fr 1fr;
	gap: 0.5rem;
	align-items: center;
	background-color: white;
	border: 0.75px solid lightgray;
`;

const ProductTitle = styled.h1`
	justify-self: flex-start;
	align-self: flex-start;
	font-size: 1.75em;
	font-weight: 600;
`;

const ProductImage = styled.img`
	margin-left: auto;
	margin-right: auto;
	max-width: 100%;
	height: auto;
	overflow: hidden;
`;

const ProductInfo = styled.section`

`;

const ProductCost = styled.h3`
	margin-bottom: 0.75rem;
	font-size: 1.2em;
	font-style: italic;
`;

const ProductStock = styled.span`
	background-color
`;

const ProductButton = styled.span`
	padding: 8px 16px;
	justify-self: flex-end;
	border: 1px solid lightgray;
	border-radius: 5px 0;
	cursor: pointer;
	visibility: ${prop => prop.hover ? "visible" : "hidden" };
`;

const Product = ({ product }) => {
	const {
		name, picture, description,
		vendor, unitCost, inStock,
		size, materials
	} = product;

	const [hover, setHover] = useState(false);

	return (
		<ProductSection
			onMouseEnter={ () => setHover(true) }
			onMouseLeave={ () => setHover(false) }
		>
			<ProductImage src={ picture[0].url } alt={ name } />

			<ProductInfo>
				<ProductTitle>{ name }</ProductTitle>
				<ProductStock>{ inStock ? "In Stock" : "Sold Out" }</ProductStock>
				<ProductCost>${ unitCost.toFixed(2) }</ProductCost>
			</ProductInfo>
			
			<ProductButton hover={ hover }>Request Information</ProductButton>
		</ProductSection>
	)
};	

export default Product;